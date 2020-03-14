const products = require("./products/products");
const signUp = require("./users/signUpUsers");

const routes = {
  "/products": products,
  "/signUp": signUp
};

module.exports = routes;
