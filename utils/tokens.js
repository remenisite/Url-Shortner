const jwt = require("jsonwebtoken");

const createTkn = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SEC);
  return token;
};

module.exports = { createTkn };
