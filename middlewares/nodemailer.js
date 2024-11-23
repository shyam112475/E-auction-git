const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service:"gmail",
  auth: {
  user: 'pranjalgeete@gmail.com',
        pass: 'Shyam@123'
  },
});

const mailOptions = {
    from:'pranjalgeete@gmail.com',    // Sender's email address
    to: 'shyamrajput.me@gmail.com',    // Recipient's email address
    subject: 'Test Email from Node.js', // Subject of the email
    text: 'Hello, this is a test email sent using Nodemailer and Gmail!', // Plain text body
    // html: '<h1>Hello, this is a test email sent using Nodemailer and Gmail!</h1>'  // Optional: HTML body
  };
  // Send the email
const main = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      // If there's an error, log it
      console.log('Error occurred:', error);
    } else {
      // If the email is sent successfully, log the response
      console.log('Email sent successfully:', info.response);
    }
  });

module.exports = main