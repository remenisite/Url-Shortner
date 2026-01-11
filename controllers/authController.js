const userSchema = require("../models/userSchema");
const { isvelidEmail, isvalidPassword } = require("../utils/validation");

const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName) return res.status(400).send({ message: "give fullName" });
    if (!email) return res.status(400).send({ message: "give email" });
    if (!isvelidEmail(email))
      return res.status(400).send({ message: "give valid email" });
    if (!password) return res.status(400).send({ message: "give password" });
    if (!isvalidPassword(password))
      return res.status(400).send({ message: "give valid password" });

    const exixtingUser = await userSchema.findOne({ email });
    if (exixtingUser)
      return res.status(400).send({ message: "User already axixt" });

    const user = new userSchema({
      fullName,
      email,
      password,
    });
    user.save();

    res.status(201).send("new user created");
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const signin = async (req, res) => {
  res.send("signin");
};

module.exports = { signin, signup };
