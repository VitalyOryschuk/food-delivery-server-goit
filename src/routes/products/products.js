const fs = require("fs");
const path = require("path");

const products = (req, res) => {
  const productFilePath = path.join(
    __dirname,
    "../../db/products/all-products.json"
  );

  fs.readFile(productFilePath, (err, data) => {
    if (err) {
      throw err;
    }

    res.set("Content-Type", "application/json").send(data).end();
  });
};

module.exports = products;
