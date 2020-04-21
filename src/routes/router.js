const express = require("express");
const products = require("./products/products");
const getProductById = require("./products/getProductById");
const users = require("./users/users");
const signUp = require("./users/signUpUsers");
const getUserById = require("./users/getUserById");
const userOrder = require("./users/userOrder");

const apiRoutes = express.Router();
// const routes = {
//   "/products": products,
//   "/signup": signUp
// };
apiRoutes
  .get("/products", products)
  .get("/products/:id", getProductById)
  .get("/users", users)
  .post("/users", signUp)
  .get("/users/:id", getUserById)
  .post("/orders", userOrder)
  .get("*", (req, res, next) => {
    res.status(404).send("Route not found");
  });

module.exports = apiRoutes;
