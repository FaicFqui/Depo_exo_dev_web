// 1. Manipulation d'objets
const person = {
    name: "Alice",
    age: 25,
    skills: ["JavaScript", "Node.js"],
  };
  
  // Accéder aux valeurs d'un objet
  console.log("Nom :", person.name); // Alice
  console.log("Âge :", person.age); // 25
  console.log("Compétences :", person.skills); // ["JavaScript", "Node.js"]
  
  // Modifier des valeurs dans un objet
  person.age = 26; // Mettre à jour l'âge
  person.city = "Paris"; // Ajouter une nouvelle propriété
  console.log("Personne mise à jour :", person);
  
  // Supprimer une propriété
  delete person.city;
  console.log("Personne après suppression :", person);
  
  // 2. Manipulation de tableaux
  const numbers = [10, 20, 30, 40, 50];
  
  // Ajouter un élément à la fin du tableau
  numbers.push(60);
  console.log("Tableau après push :", numbers); // [10, 20, 30, 40, 50, 60]
  
  // Découper une partie d'un tableau
  const slicedNumbers = numbers.slice(1, 4);
  console.log("Sous-tableau (slice) :", slicedNumbers); // [20, 30, 40]
  
  // Trouver l'index d'un élément
  const index = numbers.indexOf(30);
  console.log("Index de 30 :", index); // 2
  
  // Supprimer un élément du tableau en utilisant indexOf
  if (index !== -1) {
    numbers.splice(index, 1); // Supprime 1 élément à partir de l'index trouvé
    console.log("Tableau après suppression de 30 :", numbers); // [10, 20, 40, 50, 60]
  }
  
  // 3. Travailler avec des tableaux d'objets
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  // Trouver un objet dans un tableau d'objets
  const user = users.find((u) => u.id === 2);
  console.log("Utilisateur avec l'ID 2 :", user); // { id: 2, name: "Bob" }
  
  // Ajouter un nouvel utilisateur
  users.push({ id: 4, name: "Diana" });
  console.log("Liste des utilisateurs après ajout :", users);
  
  // Modifier un utilisateur existant
  const userIndex = users.findIndex((u) => u.id === 3);
  if (userIndex !== -1) {
    users[userIndex].name = "Charlie Updated";
  }
  console.log("Liste des utilisateurs après modification :", users);
  
  // Supprimer un utilisateur par ID
  const removeIndex = users.findIndex((u) => u.id === 1);
  if (removeIndex !== -1) {
    users.splice(removeIndex, 1);
  }
  console.log("Liste des utilisateurs après suppression :", users);
  