const morgan = require("morgan");
const router = require("./routes/router");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// const mongoose = require("mongoose");

const errorHandler = (err, req, res, next) => {
  res.status(500).send("Error found: " + err.stack);
};
// const staticPath = path.join(__dirname, "..", "assets");

const startServer = port => {
  app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(morgan("dev"))
    // .use(express.static(staticPath))
    .use("/", router)
    .use(errorHandler);
  app.listen(port);
  console.log("Server was started at http://localhost:" + port);
};
module.exports = startServer;
// const startServer = port => {
//   const server = http.createServer((request, response) => {
//     const parsedUrl = url.parse(request.url);

//     const func = router[parsedUrl.pathname] || router.default;

//     logger(request, response, () => func(request, response));
//   });

//   server.listen(port, () => {
//     console.log(`server is listening on ${port}`);
//   });
// };
