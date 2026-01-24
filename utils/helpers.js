const jwt = require("jsonwebtoken");

const generateTkn = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SEC);

  return token;
};

module.exports = { generateTkn };
