const products = require("./products/products");
const signUp = require("./users/signUpUsers");

const routes = {
  "/products": products,
  "/signup": signUp
};

module.exports = routes;
