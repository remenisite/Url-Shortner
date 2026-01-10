const jwt = require("jsonwebtoken");

const generateAccTkn = (payload) => {
  try {
    const token = jwt.sign(payload, process.env.JWT_SEC);
    return token;
  } catch (error) {
    console.log(error);
  }
};

const verifyTkn = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SEC);

  return decoded;
};

module.exports = { generateAccTkn, verifyTkn };
