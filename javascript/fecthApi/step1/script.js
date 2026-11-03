
// Virtual Users Data (Array of Objects)
const users = [
  {
    id: 1,
    name: "Aung Aung",
    email: "aungaung@gmail.com",
    role: "Admin",
    isActive: true
  },
  {
    id: 2,
    name: "Su Su",
    email: "susu@gmail.com",
    role: "User",
    isActive: false
  },
  {
    id: 3,
    name: "Kyaw Kyaw",
    email: "kyawkyaw@gmail.com",
    role: "Editor",
    isActive: true
  }
];

console.log(users);
console.log(users[0]);
console.log(users[0].name);


const newUser = { id: 4, name: "Mya Mya", role: "User" };

const jsonString = JSON.stringify(newUser);

console.log(typeof jsonString); // "string"
console.log(jsonString); // '{"id":4,"name":"Mya Mya","role":"User"}'

// Server response json
const responseFromServer = '{"id":4,"name":"Mya Mya","role":"User"}';

// JS Object
const parsedUser = JSON.parse(responseFromServer);

console.log(typeof parsedUser); // "object"
console.log(parsedUser.name);   // "Mya Mya"