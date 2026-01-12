const mongoose = require("mongoose");

const dbConfig = () => {
    return mongoose
      .connect(process.env.DB_STRING)
      .then(() => console.log("database ok"));
};

module.exports = dbConfig







                    