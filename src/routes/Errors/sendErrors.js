const sendResponse = (item, res, status = "200") => {
  res.status(`${status}`);
  res.json({
    status: "success",
    item,
  });
};

const sendError = (res, text) => {
  res.status(400);
  res.json({
    error: `${text} was not found`,
  });
};

module.exports = { sendResponse, sendError };
