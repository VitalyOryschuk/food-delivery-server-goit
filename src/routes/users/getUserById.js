const fs = require("fs");
const path = require("path");

const filterUsers = (users, id) => {
  return users.filter((user) => user.id === id);
};

const getUserById = (req, res) => {
  console.log(req.params.id);

  const id = req.params.id;

  const productFilePath = path.join(
    __dirname,
    "../../db/users",
    "all-users.json"
  );

  const users = JSON.parse(fs.readFileSync(productFilePath));

  const filteredUser = filterUsers(users, id);

  if (filteredUser.length > 0) {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    const responseMessage = `{
            "status": "success",
            "products": ${JSON.stringify(filteredUser)}
          }`;
    res.write(responseMessage);
    res.end();
    return;
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });
    res.write(`{
          "status": "not found"
        }`);
    res.end();
    return;
  }
};

module.exports = getUserById;
