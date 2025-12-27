const shortuserSchema = require("../models/shortuserSchema");
const randomNumberStr = require("../utils/createRandomStr");
const { isvalidUrl } = require("../utils/validation");

const createShortUrl = async (req, res) => {
  const { urlLong } = req.body;

  try {
    if (!urlLong) {
      return res.status(400).send({ message: "give url" });
    }

    if (!isvalidUrl(urlLong)) {
      return res.status(400).send({ message: "give valid url" });
    }
    const urlShort = randomNumberStr();
    const urlData = new shortuserSchema({
      urlLong,
      urlShort,
    });
    urlData.save();
    res.status(201).send({
      urlLong: urlData.urlLong,
      urlShort: urlData.urlShort,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "server error" });
  }
};

const redirectUrl = async (req, res) => {
  try {
    const perams = req.perams;
    if (!perams) return;
    const urlData = await shortuserSchema.findOne({ urlShort: perams.id });
    if (!urlData) return res.redirect(process.env.CLIENT_URL + urlData.urlShort);
    res.redirect(urlData.urlLong);
  } catch (error) {
    res.status(500).send({ message: "server error" });
  }
};

module.exports = { createShortUrl, redirectUrl };
