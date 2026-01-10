const express = require("express");
const { createShortUrl } = require("../controllers/shorturlController");
const { authMiddle } = require("../middleware/authMiddleware");

const route = express.Router();

route.use("/create", authMiddle, createShortUrl);

module.exports = route;
