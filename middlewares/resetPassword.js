const User = require('../models/user')
const OTP = require('../models/otp')
const express = require('express');
const bcrypt = require('bcryptjs')
const nodemailer = require('nodemailer');
const { hash } = require('crypto');
const { where } = require('sequelize');


const router = express.Router()

router.post("/resetpassword",async(req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({where:{email:email}})
  if(!user) return res.status(400).json('user not found')
  const resetPasswordCode = Math.floor(100000 + Math.random() * 900000)
 const resetPasswordExpires = Date.now()+5*60*1000
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
       user: 'kelsi.mclaughlin@ethereal.email',
        pass: '6kR4fyYEwS4pHCyDtd'
    },
  })

const mailOptions = {
  from: 'kelsi.mclaughlin@ethereal.email',
  to:email,
  subject: 'Reset Password',
  html: ``,
  text:`this is your OTP enter thise 000 code to reset your password : ${resetPasswordCode}`
}

transporter.sendMail(mailOptions)
const store_otp = await OTP.create({resetPasswordCode:resetPasswordCode,resetPasswordExpires:resetPasswordExpires})
res.status(200).redirect('/entercode')
router.post("/submitcode",async(req,res)=>{
   const current_time  = Date.now()
  const {resetPasswordCode} = req.body
  const codeExists = await OTP.findOne({resetPasswordCode:resetPasswordCode})
  if(!codeExists) return res.status(400).json('invalid or expired code')
    const {password} = req.body
  const hashedPassword = await bcrypt.hash(password,10)
  const changePassword = await user.update({password:hashedPassword})
  res.status(200).json('password changed')
})
})



module.exports =  router;
