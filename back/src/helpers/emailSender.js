const mailer = require('./mailer');
const templateHTML = require('./template.html')

exports.sendEmail = (email, subject, content) =>{

    mailer.sendMail(
        {
          from: process.env.SMTP_USER,
          to: email,
          subject: subject,
          text: content,
            html: templateHTML,
        },
        (err, info) => {
          if (err) console.error(err);
          else console.log(info);
        }
      );




}