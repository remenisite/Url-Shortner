const authMiddleware = (req, res, next) => {
  const token = req.cookies;

  console.log(token.acc_token);
};

module.exports = authMiddleware;
