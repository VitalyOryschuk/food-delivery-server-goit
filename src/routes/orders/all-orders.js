const Order = require("../../db/schemas/orders");
const { sendResponse, sendError } = require("../Errors/sendErrors");

const allOrders = (req, res) => {
  Order.find()
    .then((orders) => {
      sendResponse(orders, res, "200");
    })
    .catch(() => {
      sendError(res, "Orders");
    });
};

module.exports = allOrders;
