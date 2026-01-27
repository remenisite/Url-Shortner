const express = require("express");
const dbConfig = require("./dbConfig");
require("dotenv").config();
const app = express();
const route = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require('cors')
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
dbConfig();
app.use(route);

app.listen(8000, () => {
  console.log(`server ok`);
});
