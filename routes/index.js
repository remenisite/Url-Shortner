const express = require("express");
const routes = express.Router();
const authRoute = require("./auth");
const urlRoute = require("./url");

routes.get("/", (req, res) => {
  res.status(200).send({ message: "hello" });
});

routes.use("/auth", authRoute);
routes.use("/url", urlRoute);

routes.use((req, res) => {
  res.status(400).send({ message: "400 not found!" });
});

module.exports = routes;
