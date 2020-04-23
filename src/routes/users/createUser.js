const User = require("../../db/schemas/user");
const bcrypt = require("bcrypt");

const createUser = (req, res) => {
  const user = req.body;

  const hashedPassword = bcrypt.hashSync(user.password, 10);
  const userData = { ...user, password: hashedPassword };

  const newUser = new User(userData);

  const sendResponse = (user) => {
    console.log(user);

    res.json({
      status: "success",
      user,
    });
  };

  const sendError = () => {
    res.status(400);
    res.json({
      error: "user was not saved",
    });
  };

  newUser.save().then(sendResponse).catch(sendError);
};

module.exports = createUser;
