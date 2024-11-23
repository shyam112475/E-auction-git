const express = require('express');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('../models/user'); // Assuming you have a User model
const router = express.Router()
const app = express();
app.use(express.json());

// Nodemailer transporter setup (replace with your email details)
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'dariana62@ethereal.email',
        pass: '1zJCsg97wV92NPHvGs'
    }
});

// Password Reset Request Route
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send('User not found');
  }

  // Generate a password reset token
  const token = crypto.randomBytes(20).toString('hex');

  // Store the token with an expiration time (1 hour)
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour expiration
  await user.save();

  // Send the reset email
  const resetUrl = `http://localhost:3000/reset-password/${token}`;
  const mailOptions = {
    to: email,
    from: 'dariana62@ethereal.email',
    subject: 'for forgot password request',
    text: `Click the following link to reset your password: ${resetUrl}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return res.status(500).send('Error sending email');
    }
    res.send('Password reset email sent');
  });
});

module.exports = router