const express = require("express");
const { createShortUrl } = require("../controllers/shorturlController");
const authMiddleware = require("../middleware/authMiddleware");
const route = express.Router();

route.use("/create", authMiddleware, createShortUrl);

module.exports = route;
