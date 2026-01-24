const express = require("express");
const {createShortUrl} = require("../controllers/ShortController");
const { authMiddle } = require("../middleware/authmiddlewere");
const routes = express.Router();
routes.post("/create", authMiddle, createShortUrl);

module.exports = routes;
