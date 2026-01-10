const authMiddleware = (req, res, next) => {
  const token = req.cookies;

  console.log(token.acc_token);
  next()
};

module.exports = authMiddleware;
