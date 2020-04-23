const express = require("express");
const mainRoute = require("./main/main");
const products = require("./products/products");
const getUser = require("./users/getUsers");
const createUser = require("./users/createUser");
const updateUser = require("./users/createUser");

const apiRoutes = express.Router();

apiRoutes
  .get(("/", mainRoute))
  .get("/users/:id", getUser)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  .get(("/products", products));
// .post(("/signup", signUp));

module.exports = apiRoutes;
