const express = require('express');
const app = express();
const port = 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Simuler une base de données en mémoire
let items = [];

// === CRUD Operations ===

// 1. CREATE - Ajouter un nouvel élément (POST)
app.post('/items', (req, res) => {
    const { id, name } = req.body;
    if (!id || !name) {
        return res.status(401).json({ message: "Invalid data: 'id' and 'name' are required." });
    }
    const existingItem = items.find(item => item.id === id);
    if (existingItem) {
        return res.status(401).json({ message: "Item with this ID already exists." });
    }
    items.push({ id, name });
    res.status(201).json({ message: "Item created successfully.", item: { id, name } });
});

// 2. READ - Récupérer tous les éléments (GET)
app.get('/items', (req, res) => {
    res.status(200).json(items);
});

// 3. READ - Récupérer un élément par ID (GET)
app.get('/items/:id', (req, res) => {
    const { id } = req.params;
    const item = items.find(item => item.id === id);
    if (!item) {
        return res.status(404).json({ message: "Item not found." });
    }
    res.status(200).json(item);
});

// 4. UPDATE - Mettre à jour un élément (PUT)
app.put('/items/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        return res.status(401).json({ message: "Invalid data: 'name' is required." });
    }

    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: "Item not found." });
    }

    items[itemIndex].name = name;
    res.status(200).json({ message: "Item updated successfully.", item: items[itemIndex] });
});

// 5. DELETE - Supprimer un élément (DELETE)
app.delete('/items/:id', (req, res) => {
    const { id } = req.params;
    const itemIndex = items.findIndex(item => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: "Item not found." });
    }

    const removedItem = items.splice(itemIndex, 1);
    res.status(200).json({ message: "Item deleted successfully.", item: removedItem });
});

// === Start Server ===
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
