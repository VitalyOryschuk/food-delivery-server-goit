const http = require("http");
const url = require("url");
const morgan = require("morgan");
const router = require("./routes/router");
const logger = morgan("combined");

const serverStart = port => {};

module.exports = serverStart;
