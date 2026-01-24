const express = require("express");
const {createShortUrl, getAllUrl} = require("../controllers/ShortController");
const { authMiddle, isAuth } = require("../middleware/authmiddlewere");
const routes = express.Router();
routes.post("/create", isAuth, createShortUrl);
routes.get("/getAll", authMiddle, getAllUrl);

module.exports = routes;
