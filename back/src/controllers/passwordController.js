const userDataAccess = require("../models/userDataAccess");
const passwordDataAccess = require("../models/passwordDataAccess");
const { verifyPassword, hashPassword } = require("../helpers/argonHelper");
const randomstring = require("randomstring");
const { passwordReset } = require("../helpers/emailTemplate");
const { sendEmail } = require("../helpers/emailSender");

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
              passwordDataAccess.change(newPassword, userId).then((result) => {
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

exports.reset = (req, res) => {
  const { email } = req.body;
  //* check if email exists
  userDataAccess.findByEmail(email).then((user) => {

    if (!user) {

      return res.status(401).send("Email was not found");

    } else {
      res.cookie("id", user.id, { httpOnly: true, secure: false })
      
      let emailSubject = "Test App - Forget Password";

      sendEmail(email, emailSubject, user.name, user.id);

      res.status(200).send("Check your inbox for your temporary password");
    }
  });
};

exports.forget = (req, res) => {
  const { password, email } = req.body;

      //* get user information
      userDataAccess.findByEmail(email).then((foundUser, err) => {
        //* general error
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }
        //* verify currentPassword
        if (!foundUser) {
          return res.status(401).send("Invalid credentials");
        } else {
          console.log(foundUser);
          //* check if currentPassword is correctly
          verifyPassword(password, foundUser.password).then(
            (verification) => {
              if (!verification) {
                delete foundUser.password;
                ///* hash new password
                hashPassword(password).then((newPassword) => {
                  //* send new password to DB
                  passwordDataAccess.change(newPassword, foundUser.id).then((result) => {
                    if (result.affectedRows > 0) {
                      res.status(200).send("Your password has been updated!");
                    }
                  });
                });
              } else {
                res.status(401).send("Invalid credentials, same password as current password");
              }
            }
          );
        }
      });
}
