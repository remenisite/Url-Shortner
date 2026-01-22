const express = require("express");
const routes = express.Router();
const authRoute = require("./auth");
const urlRoute = require("./url");
const { redirectUrl } = require("../controllers/ShortController");

routes.get("/", (req, res) => {
  res.status(200).send({ message: "hello" });
});                  
routes.use("/auth", authRoute);
routes.use("/url", urlRoute);
routes.get('/:id' , redirectUrl)

routes.use((req, res) => {
  res.status(400).send({ message: "400 not found!" });
});

module.exports = routes;
