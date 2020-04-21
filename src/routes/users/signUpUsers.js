const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const signUp = (req, res) => {
  const userName = req.body.username;
  const userFilePath = path.join(__dirname, `../../db/users/all-users.json`);
  const dataUser = Object.assign(req.body, {
    id: shortid.generate()
  });

  const resSavedUser = data => {
    res.set("Content-Type", "application/json");

    const responseMessage = `{
                "status": "success",
                "user": ${JSON.stringify(data)}
              }`;
    res
      .status(201)
      .send(responseMessage)
      .end();
    return;
  };

  fs.readFile(userFilePath, (err, array) => {
    if (
      array.length > 0 &&
      JSON.parse(array).some(item => item.username === userName)
    ) {
      res
        .status(400)
        .send({ error: "user exists" })
        .end();
      return;
    } else if (array.length !== 0) {
      const arrayUsers = JSON.parse(array);
      const newUser = [...arrayUsers, dataUser];
      fs.writeFile(userFilePath, JSON.stringify(newUser), err => {
        if (err) throw err;
        resSavedUser(dataUser);
      });
    } else if (array.length === 0) {
      const dataUserArray = new Array(dataUser);
      fs.writeFile(userFilePath, JSON.stringify(dataUserArray), err => {
        if (err) {
          throw err;
        }
        resSavedUser(dataUser);
      });
    }
  });
};

module.exports = signUp;
