const isvelidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isvalidPassword = (password) => {
  const passwordPattern = /^(?=.*[0-9])(?=.*[^a-zA-Z0-9]).{6,16}$/;
  return passwordPattern.test(password);
};

module.exports = { isvelidEmail, isvalidPassword };
