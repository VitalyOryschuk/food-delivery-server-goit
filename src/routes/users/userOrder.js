const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const findProducts = (products, ids) => {
  return products.filter((product) => ids.includes(product.id));
};

const userOrder = (req, res) => {
  const productId = req.body.products.slice(1, -1);
  const idInRequest = JSON.parse(req.body.products);
  const userId = req.body.user;

  const responseOrder = (status, data, statusCode) => {
    res.set("Content-Type", "application/json");

    const responseMessage = `{
                "status": ${status},
                "order": ${JSON.stringify(data)}
              }`;
    res.status(`${statusCode}`).send(responseMessage).end();
    return;
  };

  const productFilePath = path.join(
    __dirname,
    "../../db/products",
    "all-products.json"
  );
  const products = JSON.parse(fs.readFileSync(productFilePath));

  const checkedOrder = findProducts(products, productId);

  if (checkedOrder.length === idInRequest.length) {
    fs.mkdir(
      path.join(__dirname, "../../db/users", "orders"),
      { recursive: true },
      (err) => {
        if (err) throw err;
      }
    );

    const filePath = path.join(
      __dirname,
      "../../db/users/orders",
      `${userId}.json`
    );

    const dataOrder = Object.assign(
      {
        id: shortid.generate(),
      },
      req.body
    );

    fs.writeFile(filePath, JSON.stringify(dataOrder), (err) => {
      if (err) throw err;
      console.log("Order created!");
      responseOrder("success", dataOrder, 201);
    });
  } else {
    responseOrder("failed", null, 404);
  }
};

module.exports = userOrder;
