const { verifyTkn } = require("../utils/helpers");

const authMiddle = (req, res, next) => {
  const token = req.cookies.acc_token;
  const decoded = verifyTkn(token);
  console.log("token", decoded);
  next();
};

module.exports = { authMiddle };
