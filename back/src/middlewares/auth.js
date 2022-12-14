const { decodeJWT } = require("../helpers/jwtHelper")
const userDataAccess = require("../models/userDataAccess");
const jwt = require("jsonwebtoken")

exports.authorization = (req, res, next) => {
  const token = req.cookies.auth_token

  if (!token) {
    return res.sendStatus(401)
  }

  try {
    const data = decodeJWT(token)
    req.userId = data.id
    req.userName = data.name
    return next()
  } catch {
    return res.sendStatus(401)
  }
}

//* check if email already exists
exports.checkEmail = (req, res, next) => {
  const { email } = req.body;
  //* get the email address from DB using model
  userDataAccess.findByEmail(email)
    .then((result) => {
      if (result[0]) {
        req.user = result[0];
        next();
      } else {
        res.status(401).send("wrong email address");
      }
    })
    .catch((error) => console.error(error));
};

//* just used to create a new account
exports.createNewEmail = (req, res, next) => {
  const { email } = req.body;
  //* get the email address from DB using model
  userDataAccess.findByEmail(email)
    .then((result) => {
      if (!result[0]) {
        next();
      } else {
        res.status(409).send("This email address already exists");
      }
    })
    .catch((error) => console.error(error));
};

exports.checkAuth = (req, res, next) => {
  if(req.cookies){
    jwt.verify(req.cookies.user_token, process.env.PRIVATE_KEY, (err, decode) => {
      if(err){
        console.error(err)
        res.status(401).send("Your login it's not valid")
      } else {
        next()
      }
    })
  } else {
    res.status(401).send("You don't have permission to access. Try again.")
  }
}
