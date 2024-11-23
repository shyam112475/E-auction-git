const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');


exports.signup = async(req,res) => {
    try{
    const {user_id,name,email,password,phone,address,role} = req.body;
    if(!user_id||!name||!email||!password||!phone||!address) return res.status(400).json('all fields reuired')
    const existingUser = await User.findOne({where:{email}});
    if(existingUser) return res.status(400).json('user already exists pls try with another email')
    const hashpassword = await bcrypt.hash(password,10)
    const user =  new User({user_id:user_id,name:name,email:email,password:hashpassword,phone:phone,address:address,role:role})
    const data = await user.save()
    res.status(201).json(data)
}catch(err){
    res.status(500).json(err)
}
}

exports.signin = async(req,res) => {
    try{
    const {email,password} = req.body;
    if(!email||!password) return res.status(400).json('all fields require')
    const user = await User.findOne({where:{email}});
    if(!user) return res.status(400).json('invalid user name or password')
    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(400).json('invalid username or password')
    const token =  jwt.sign(email,"tumharanamhaihinhilistmain")
    res.cookie('token',token)
    res.status(200).json(user)

}catch(err){
    res.status(500).json(err)
} 
}

exports.updateUser = async(req,res) => {
    try{
    const {name,email,password,phone,address} = req.body
    if(!name||!email||!password||!phone||!address) return res.status(400).json('all fields reuired')
    const updateUser = await User.update({name,email,password,phone,address})
    res.status(201).json({msg:'details updated'},updateUser)
}catch(err){
    res.status(500).json({msg:'server error'},err)
}
}

exports.deleteUser = async(req,res) => {
try{
    const {user_id} = req.body
    const ifmatch = await User.findOne({where:{user_id}})
    if(!ifmatch) return res.status(400).json('user  not found pls enter correct user_id')
    await User.destroy({where:{user_id}})
   res.status(200).json('account deleted')
}catch(err){
    res.status(500).json('server error',err)
}
}