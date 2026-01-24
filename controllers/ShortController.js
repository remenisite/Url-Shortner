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

    const urlData = new urlSchema({
      urlLong,
      urlShort,
      user: req.user?.id,
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

const redirectUrl = async (req, res) => {
  try {
    const params = req.params;

    if (!params) return res.status(400).send({ message: "params not found" });

    const urlData = await urlSchema.findOne({ urlShort: params.id });
    if (!urlData)
      return res.redirect(process.env.CLIENT_URL + urlData.urlShort);

    console.log(urlData);

    if (urlData.user) {
      urlData.visitHistory.push({ visitTime: Date.now() });
      urlData.save();
    }

    res.redirect(urlData.urlLong);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const getAllUrl = async (req, res) => {
  try {
    const user = req.user;

    const urlHistory = await urlSchema.find({ user: user.id });
    console.log(urlHistory);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = { createShortUrl, redirectUrl, getAllUrl };
