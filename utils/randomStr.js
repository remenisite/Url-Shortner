const generateRandmonStr = (length = 5) => {
  const cherecters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  let randomStr = "";
  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * cherecters.length);

    randomStr += cherecters[randomNum];
  }
  return randomStr;
};

module.exports = generateRandmonStr;
