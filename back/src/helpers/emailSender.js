const mailer = require('./mailer');
const ejs = require('ejs');

exports.sendEmail = (receiver, subject, name, id) =>{

  const frontend = process.env.APP_FRONTEND+"/change"

  ejs.renderFile(__dirname + '/templates/body.ejs', { name, frontend, id }, (err, data) => {

    if (err) {
      console.log(err);
    } else {
      const mailOptions = {
          from: process.env.SMTP_USER,
          to: receiver,
          subject: subject,
          html: data
        }
        
      mailer.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info);
      });
    }
  });
}