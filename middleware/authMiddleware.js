const { verifyTkn } = require("../utils/tokens");

const authMiddleware = (req, res, next) => {
  const token = req.cookies;
  const decoded = verifyTkn(token);

  console.log(token.acc_token);
  next();
};

module.exports = authMiddleware;
