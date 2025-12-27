const isvalidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isvalidPassword = (password) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$/;
  return passwordPattern.test(password);
};

const isvalidUrl = (urlLong) => {
  const urlPattern =
    /^(https?:\/\/|www\.|https?|www)([-a-zA-Z0-9@:%._+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?)?$/i;

  return urlPattern.test(urlLong);
};

module.exports = { isvalidEmail, isvalidPassword , isvalidUrl };
