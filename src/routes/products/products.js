const Product = require("../../db/schemas/products");

const getProduct = (req, res) => {
  const id = req.params.id;

  const sendResponse = (product) => {
    res.status(200);
    res.json(product);
  };

  const findProduct = Product.findById(id);

  findProduct.then(sendResponse).catch((err) => {
    console.error(err);
  });
};

module.exports = getProduct;
