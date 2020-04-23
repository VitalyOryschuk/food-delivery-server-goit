const User = require("../../db/Schemas/user");
const { sendResponse, sendError } = require("../Errors/sendErrors");

const allUser = (req, res) => {
  User.find()
    .then((users) => {
      sendResponse(users, res, "200");
    })
    .catch(() => {
      sendError(response, "Users");
    });
};

module.exports = allUser;
