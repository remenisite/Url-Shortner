const express = require("express");
const { createShortUrl } = require("../controllers/shorturlController");
const route = express.Router();

route.use("/create", createShortUrl);



module.exports = route;
