const urlSchema = require("../models/urlSchema");
const generateRandmonStr = require("../utils/randomStr");
const { isvalidUrl } = require("../utils/validation");

const createShortUrl = async (req, res) => {
  try {
    const { urlLong } = req.body;
    if (!urlLong) return res.status(400).send({ message: "give url" });

    if (!isvalidUrl(urlLong))
      return res.status(400).send({ message: " give valid url" });

    const urlShort = generateRandmonStr();

    const urlData = urlSchema({
      urlLong,
      urlShort,
    });
    urlData.save();

    res.status(201).send({
      urlLong: urlData.urlLong,
      urlShort: urlData.urlShort,
    });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const redirectUrl = (req, res) => {
  const perams = req.body;
  res.send(perams);
};

module.exports = {createShortUrl , redirectUrl} ;
