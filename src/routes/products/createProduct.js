const Product = require("../../db/schemas/products");

const createProduct = (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  const sendResponse = (product) => {
    console.log(product);

    response.json({
      status: "success",
      product,
    });
  };

  const sendError = () => {
    res.status(400);
    res.json({
      error: "product was not saved",
    });
  };

  newProduct.save().then(sendResponse).catch(sendError);
};

module.exports = createProduct;
