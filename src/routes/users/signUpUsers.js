const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const userPath = path.join(__dirname, "../../db/products/users/all-users.json");
const signUp = (req, res) => {
  const body = req.body;
  const user = { id: shortid.generate(), ...body };
  const { username, telephone, password, email } = body;

  if (username && telephone && password && email) {
    const data = JSON.parse(
      fs.readFileSync(userPath, (err) => {
        if (err) throw err;
      })
    );
    data.push(user);
    fs.writeFile(userPath, JSON.stringify(data), (err) => {
      if (err) throw err;
    });

    res.writeHead(200, { "Content-type": "text/json" });

    res.write(
      JSON.stringify({
        status: "success",
        user,
      })
    );
    res.end();
  }
};

module.exports = signUp;
