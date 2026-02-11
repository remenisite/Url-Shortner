const { verifyTkn } = require("../utils/helpers");

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = verifyTkn(token);
    req.user = decoded;
    next();
  } catch (error) {
    next();
  }
};

// ================================= extra feature ==========================================

const authMiddle = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = verifyTkn(token);
    if (!decoded)
      return res.status(400).send({ message: "Unauthorized User" });
    req.user = decoded;
    next()
  } catch (error) {
    res.status(500).send({ message: "Invalid Request" });
  }
};




module.exports = { isAuth, authMiddle };
