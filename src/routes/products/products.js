const fs = require("fs");
const path = require("path");

const products = (request, response) => {
  if (request.method === "GET") {
    const productFilePath = path.join(
      __dirname,
      "../../db/products",
      "all-products.json"
    );

    const readProducts = fs.readFileSync(productFilePath);

    response.writeHead(200, {
      "Content-Type": "text/json"
    });
    response.write(readProducts);
    response.end();
    return;
  }
};

module.exports = products;
