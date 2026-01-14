const generateRandmonStr = (length = 4) => {
  const cherecters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i <= length; i++) {
    let randomStr = "";
    const randomNum = Math.floor(Math.random() * cherecters.length);

    randomStr += cherecters[randomNum];

    return randomStr;
  }
};

module.exports = generateRandmonStr;
