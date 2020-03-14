const fs = require("fs");

const signUp = (request, response) => {
  if (request.method === "POST") {
    request.on("data", data => {
      const { username, telephone, password, email } = JSON.parse(data);
      if (username && telephone && password && email) {
        fs.writeFile(
          `./src/db/products/users/${username}.json`,
          data.toString(),
          err => {
            if (err) throw err;
          }
        );
        response.writeHead(200, { "Content-type": "text/json" });
        response.write(
          JSON.stringify({
            status: "success",
            user: { username, telephone, password, email }
          })
        );
        response.end();
      } else {
        response.writeHead(400);
        response.write("Data entered incorrectly");
        response.end();
      }
    });
  }
  console.log("Wrong");
};

module.exports = signUp;
