const express = require("express");
const route = express.Router();
const authRoute = require("./auth");
const urlShortRoute = require("./shortner");
const { redirectUrl } = require("../controllers/shorturlController");

route.get("/", (req, res) => {
  res.send("home");
});

route.use("/auth", authRoute);

route.use("/url", urlShortRoute);

route.get("/:id", redirectUrl);

route.use((req, res) => {
  res.send("404 not found");
});

module.exports = route;
