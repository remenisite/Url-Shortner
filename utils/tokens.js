const jwt = require("jsonwebtoken");

const generateAccTkn = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SEC);
  return token;
};

module.exports = generateAccTkn;
