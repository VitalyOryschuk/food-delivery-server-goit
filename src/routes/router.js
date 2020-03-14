const productsRoute = require("./products/products");
const signUpUsers = require("./users/signUpUsers");

const routes = {
  "/products": productsRoute,
  "/signUp": signUpUsers
};

module.exports = routes;
