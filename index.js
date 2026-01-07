const express = require("express");
const dbConfig = require("./dbConfig");
require("dotenv").config();
const app = express();
const route = require("./routes");
const { isvalidUrl } = require("./utils/validation");
app.use(express.json());
dbConfig();
app.use(route);
app.listen(5000, () => {
  console.log("server ok");
});
