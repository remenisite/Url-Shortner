const userSchema = require("../models/userSchema");
const { generateTkn } = require("../utils/helpers");
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
    res.status(201).send({ message: "new user created" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) return res.status(400).send({ message: "give email" });
    if (!isvelidEmail(email))
      return res.status(400).send({ message: "give valid email" });
    if (!password) return res.status(400).send({ message: "give password" });
    if (!isvalidPassword(password))
      return res.status(400).send({ message: "give valid password" });

    const existingUser = await userSchema.findOne({ email });

    if (!existingUser)
      return res.status(401).send({ message: "Invalid Request" });

    const matchPass = await existingUser.comparePassword(password);
    if (!matchPass)
      return res.status(401).send({ message: "Invalid Request" });

    const token = generateTkn({
      id: existingUser._id,
      email: existingUser.email,
    });
      res.cookie('acc_token', token, {
    httpOnly: false,
    secure: false 
  });

    res.status(200).send({ message: "signin sucessfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server error" });
  }
};

const getProfile = async (req, res) => {
  try {
    const user = req.user;
    const userData = await userSchema.findById(user.id).select("-password -updatedAt");
    if (!userData) return res.status(404).send({message: "User data not found"});
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { signin, signup, getProfile };
