const productsRoute = require("./products/products");
const signUpRoute = require("./users/signUpUsers");

const routes = {
  "/products": productsRoute,
  "/signUp": signUpRoute
};

module.exports = routes;
