const { isvelidEmail, isvalidPassword } = require("../utils/validation");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  if(!fullName) return res.status(400).send({message: "give fullName"})
  if (!email) return res.status(400).send({ message: "give email" });
  if(!isvelidEmail(email)) return res.status(400).send({ message: "give valid email" });
  if (!password) return res.status(400).send({ message: "give password" });
  if (!isvalidPassword(password))return res.status(400).send({ message: "give valid password" });



  res.send("signup");
};

const signin = async (req, res) => {
  res.send("signin");
};

module.exports = { signin, signup };
