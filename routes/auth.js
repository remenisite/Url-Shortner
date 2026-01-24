const express = require("express");
const { signup, signin, getProfile } = require("../controllers/authController");
const { authMiddle } = require("../middleware/authmiddlewere");

const routes = express.Router();
routes.post('/signup', signup)
routes.post("/signin", signin );
routes.get("/getProfile" , authMiddle, getProfile)

module.exports = routes;
