const express = require("express");
const mainRoute = require("./main/main");
// const getAllUsers = require("./users/all-users");
const getUser = require("./users/getUsers");
const createUser = require("./users/createUser");
const updateUser = require("./users/createUser");
const createProduct = require("./products/createProduct");
const products = require("./products/products");
const updateProduct = require("./products/updateProduct");
const createOrders = require("./orders/createOrders");

const apiRoutes = express.Router();

apiRoutes
  .get(("/", mainRoute))
  // .get(("/users", getAllUsers))
  .get("/users/:id", getUser)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  // orders
  .post("/orders", createOrders)
  // products
  .post("/products", createProduct)
  .get(("/products", products))
  .put("/products/:id", updateProduct);

module.exports = apiRoutes;
