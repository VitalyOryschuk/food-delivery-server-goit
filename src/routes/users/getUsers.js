const User = require("../../db/schemas/user");

const getUser = (req, res) => {
  const id = req.params.id;

  const sendResponse = (user) => {
    res.status(200);
    res.json(user);
  };

  const findUser = User.findById(id);

  findUser.then(sendResponse).catch((err) => {
    console.error(err);
  });
};

module.exports = getUser;
