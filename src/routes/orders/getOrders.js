const Order = require("../../db/schemas/orders");

const getOrder = (req, res) => {
  const id = req.params.id;

  const sendResponse = (order) => {
    res.status(200);
    res.json(order);
  };

  const findOrder = Order.findById(id);

  findOrder.then(sendResponse).catch((err) => {
    console.error(err);
  });
};

module.exports = getOrder;
