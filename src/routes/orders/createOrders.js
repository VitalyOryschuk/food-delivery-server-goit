const Order = require("../../db/schemas/orders");

const createOrder = (req, res) => {
  const order = req.body;

  const newOrder = new Order(order);

  const sendResponse = (order) => {
    console.log(order);

    res.json({
      status: "success",
      order,
    });
  };

  const sendError = () => {
    res.status(400);
    res.json({
      error: "order was not saved",
    });
  };

  newOrder.save().then(sendResponse).catch(sendError);
};

module.exports = createOrder;
