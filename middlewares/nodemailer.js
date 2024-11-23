const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'dariana62@ethereal.email',
      pass: '1zJCsg97wV92NPHvGs'
  }
});

const resetUrl = `http://localhost:3000/reset-pass/${token}`;
const mailOptions = {
  to: email,
  from: 'dariana62@ethereal.email',
  subject: 'password reset request',
  text: `Click the following link to reset your password: ${resetUrl}`,
};

 
const main = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      
      console.log('Error occurred:', error);
    } else {
      
      console.log('Email sent successfully:', info.response);
    }
  });

module.exports = main