const express = require("express");
const { signup, signin } = require("../controllers/authController");
const route = express.Router();

route.use("/signup", signup);

route.use("/signin", signin);

module.exports = route;
