// const fs = require("fs");
// const path = require("path");

// const signUpUsers = (request, response) => {
//   if (request.method === "POST") {
//     request.on("data", data => {
//       const username = JSON.parse(data).username;

//       const userFilePath = path.join(
//         __dirname,
//         `../../db/users/products/${username}.json`
//       );

//       fs.writeFile(userFilePath, data, err => {
//         if (err) {
//           throw err;
//         }
//       });

//       response.writeHead(200, {
//         "Content-Type": "text/json"
//       });
//       const responseMessage = `{
//           "status": "success",
//           "user": ${data}
//         }`;
//       response.write(responseMessage);
//       response.end();
//       return;
//     });
//   }
// };

// module.exports = signUpUsers;
const fs = require("fs");

const signUp = (request, response) => {
  if (request.method === "POST") {
    request.on("data", chunk => {
      const { username, telephone, password, email } = JSON.parse(chunk);
      if (username && telephone && password && email) {
        fs.writeFile(
          `./src/db/users/${username}.json`,
          chunk.toString(),
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
};

module.exports = signUp;
