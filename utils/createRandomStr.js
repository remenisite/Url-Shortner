
const randomNumberStr = (length = 5) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

  let randomStr = ""; 

  for (let i = 0; i < length; i++) {
    const randomNum = Math.floor(Math.random() * characters.length);
    randomStr += characters[randomNum];
  }

  return randomStr;
};

module.exports = randomNumberStr;
