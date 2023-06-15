const express = require("express");
const server = express();
require("dotenv").config();
const usersRouter = require("./users/users-router");

server.use(express.json());

server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ message: "server is working" });
});

module.exports = server;
