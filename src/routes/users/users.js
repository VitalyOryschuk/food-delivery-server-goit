const fs = require("fs");
const path = require("path");

const users = (req, res) => {
  const usersFilePath = path.join(
    __dirname,
    "../../db/products/users/all-users.json"
  );

  fs.readFile(usersFilePath, (err, data) => {
    if (err) {
      throw err;
    }
    res.set("Content-Type", "application/json").send(data).end();
  });
};

module.exports = users;
