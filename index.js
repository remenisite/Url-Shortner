const express = require("express");
const dbConfig = require("./dbConfig");
require("dotenv").config();
const route = require("./routes");
const cookieParser = require('cookie-parser')
const app = express();
dbConfig();
app.use(express.json());
app.use(cookieParser());
app.use(route);

app.listen(8000, () => {
  console.log(`server ok`);
});
