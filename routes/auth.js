const express = require("express");
const { signup, signin } = require("../controllers/authController");

const routes = express.Router();


routes.post('/signup', signup)

routes.post("/signin", signin );

module.exports = routes;
