const { verifyTkn } = require("../utils/helpers");

const authMiddle = (req, res, next) => {
  try {
    const token = req.headers.acc_token;
    if (!token) return res.status(400).send({ message: "Invalid token" });

    const decoded = verifyTkn(token);

    req.user = decoded;

    next();
  } catch (error) {
    next();
  }
};

module.exports = { authMiddle };
