const uuidv4 = require("uuid");

function getId() {
  return uuidv4.v4();
}

const initializeUsers = () => [
  { id: uuidv4, username: "hamza1", password: "hero" },
  { id: uuidv4, username: "hamza2", password: "hero" },
];

let users = initializeUsers();

function getUsers() {
  return users;
}

function insertUser(user) {
  user.id = getId();
  users.push(user);
  return user;
}
function login(user) {
  let existUser = null;
  for (let i = 0; i < users.length; i++) {
    const item = allUsers[i];
    if (item.username === user.username && item.password === user.password) {
      existUser = item;
      break;
    }
  }
  return existUser;
}

module.exports = { getUsers, insertUser, login };
