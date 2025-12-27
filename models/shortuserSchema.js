const mongoose = require("mongoose");

const shortuserSchema = new mongoose.Schema({
  urlLong: {
    type: String,
    required: true,
  },
  urlShort: {
    type: String,
    required: true,
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "user",
  },

  visitHistory: [
    {
      visitTime: {
        type: Date,
        default: Date.now(),
      },
      visitLocation: {
        type: String,
        default: "Unknown",
      },
    },
  ],
});

module.exports = mongoose.model("shortUrl", shortuserSchema);
