const express = require("express");
const mainRoute = require("./main/main");
const getAllUsers = require("./users/all-users");
const getUser = require("./users/getUsers");
const createUser = require("./users/createUser");
const updateUser = require("./users/updateUser");
const createProduct = require("./products/createProduct");
const getProducts = require("./products/products");
const getAllProducts = require("./products/all-products");
const updateProduct = require("./products/updateProduct");
const createOrders = require("./orders/createOrders");
const getOrders = require("./orders/getOrders");
const getAllOrders = require("./orders/all-orders");

const apiRoutes = express.Router();

apiRoutes
  .get("/", mainRoute)
  .get("/users", getAllUsers)
  .get("/users/:id", getUser)
  .post("/users", createUser)
  .put("/users/:id", updateUser)
  // orders
  .post("/orders", createOrders)
  .get("/orders/:id", getOrders)
  .get("/orders", getAllOrders)
  // products
  .post("/products", createProduct)
  .get("/products/:id", getProducts)
  .get("/products", getAllProducts)
  .put("/products/:id", updateProduct);

module.exports = apiRoutes;
