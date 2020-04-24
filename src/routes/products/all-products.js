const Product = require("../../db/schemas/products");
const { sendResponse, sendError } = require("../Errors/sendErrors");

const allProducts = (req, res) => {
  Product.find()
    .then((products) => {
      sendResponse(products, res, "200");
    })
    .catch(() => {
      sendError(res, "Products");
    });
};

module.exports = allProducts;
