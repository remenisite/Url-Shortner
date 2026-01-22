const express = require("express");
const {createShortUrl} = require("../controllers/ShortController");
const routes = express.Router();
routes.post("/create", createShortUrl);

module.exports = routes;
