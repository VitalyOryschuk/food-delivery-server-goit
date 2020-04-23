const express = require("express");
const products = require("./products/products");
const signUp = require("./users/signUpUsers");

const apiRoutes = express.Router();

apiRoutes.get(("/products", products)).post(("/signup", signUp));

module.exports = apiRoutes;
