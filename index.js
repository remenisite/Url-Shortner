const express = require("express");
const dbConfig = require("./dbConfig");
const { route } = require("./routes");
const app = express();
require("dotenv").config();

app.use(express.json());

dbConfig()
app.use(route)

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(8000, () => {
  console.log(`server ok`);
});
