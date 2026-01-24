const jwt = require("jsonwebtoken");

const generateTkn = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SEC);

  return token;
};


const verifyTkn = ()=>{
  const decoded = jwt.verify(token, process.env.JWT_SEC );
}

module.exports = { generateTkn , verifyTkn };
