const userSchema = require("../models/userSchema");
const { isvalidEmail, isvalidPassword } = require("../utils/validation");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    if (!fullName) return res.status(400).send("fullName required");
    if (!email) return res.status(400).send("email required");
    if (!isvalidEmail(email)) return res.status(400).send("email not valid");
    if (!password) return res.status(400).send("password required");
    if (!isvalidPassword(password))
      return res.status(400).send("password not valid");

    const exixtingUser = await userSchema.findOne({ email });
    if (exixtingUser)
      return res.status(400).send({ message: "user already exits" });

    const user = new userSchema({
      fullName,
      email,
      password,
    });
    user.save();

    res.status(201).send({ message: "new user created" });
  } catch (error) {}
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email) return res.status(400).send("email required");
    if (!isvalidEmail(email)) return res.status(400).send("email not valid");
    if (!password) return res.status(400).send("password required");
    if (!isvalidPassword(password))
      return res.status(400).send("password not valid");

    const exixtingUser = await userSchema.findOne({ email });
    if (!exixtingUser) return res.status(400).send({ message: "user fake" });

    const userPass = await exixtingUser.comparePassword(password);
    if (!userPass)
      return res.status(400).send({ message: "incurrect password" });
    const token = jwt.sign(
      { id: exixtingUser._id, email: exixtingUser.email },
      process.env.JWT_SEC
    );
    console.log(token)
    res.status(200).send({ message: "successfully login" });
  } catch (error) {
    res.status(500).send({message: "internal server error"});
    console.log(error)
  }
};

module.exports = { signin, signup };
