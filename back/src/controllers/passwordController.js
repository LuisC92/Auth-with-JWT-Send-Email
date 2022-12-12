const userDataAccess = require("../models/userDataAccess");
const passwordDataAccess = require("../models/passwordDataAccess");
const { verifyPassword, hashPassword } = require("../helpers/argonHelper");
const randomstring = require("randomstring");
const {passwordReset} = require("../helpers/emailTemplate") 
const {sendEmail} = require("../helpers/emailSender")

exports.change = (req, res) => {
  const { currentPassword, newPassword, userId } = req.body;

  //* get user information
  userDataAccess.findOne(userId).then((foundUser, err) => {
    //* general error
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    //* verify currentPassword
    if (!foundUser) {
      return res.status(401).send("Invalid credentials");
    } else {
        //* check if currentPassword is correctly
      verifyPassword(currentPassword, foundUser[0].password).then(
        (verification) => {
          if (verification) {
            delete foundUser[0].password;
            ///* hash new password
            hashPassword(newPassword).then((newPassword) => {
              //* send new password to DB
              passwordDataAccess.change(newPassword, userId)
                .then((result) => {
                if (result.affectedRows > 0) {
                  res.status(200).send("Your password has been updated!");
                }
              });
            });
          } else {
            res.status(401).send("Invalid credentials, wrong password");
          }
        }
      );
    }
  });
};

exports.reset = (req, res)=>{
    const {email} = req.body
    //* check if email exists
    userDataAccess.findByEmail(email).then((user)=>{
        if(!user){
            return res.status(401).send("Email was not found")
        } else {
            //* if email is correct, generate a temporary random password
            //* const randomString = randomstring.generate(x) -> where x is the number of characters
            const randomString = randomstring.generate(12)
            console.log("temporary: ",randomString)
            //* hash password and send to mysql
            hashPassword(randomString).then((newPassword) => {
                //* send new password to DB
                passwordDataAccess.change(newPassword, user.id)
                  .then((result) => {
                  if (result.affectedRows > 0) {
                    //* send email to user reset is password

                    let emailContent = passwordReset(email, randomString, user.name)
                    
                    let emailSubject = "Test App - Temporary Password";

                    sendEmail(email, emailSubject, emailContent)
                    res.status(200).send("Check your inbox for your temporary password")
                  } 
                });
              });
        }

    })
}
