const fs = require("fs");
const path = require("path");
const url = require("url");

const getId = (url) => {
  const lastIndex = url.lastIndexOf("/");

  if (lastIndex !== -1) {
    return url.slice(lastIndex + 1);
  }
};

const filterProducts = (products, id) => {
  return products.filter((product) => product.id === id);
};

const getProductsById = (req, res) => {
  const parsedUrl = url.parse(req.url);
  const id = Number(getId(parsedUrl.path));

  const productFilePath = path.join(
    __dirname,
    "../../db/products",
    "all-products.json"
  );

  const products = JSON.parse(fs.readFileSync(productFilePath));
  const filteredProduct = filterProducts(products, id);

  if (filteredProduct.length > 0) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    const responseMessage = `{
        "status": "success",
        "products": ${JSON.stringify(filteredProduct)}
      }`;
    res.write(responseMessage);
    res.end();
    return;
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.write(`{
      "status": "no products",
      "products": []
    }`);
    res.end();
    return;
  }
};

module.exports = getProductsById;
