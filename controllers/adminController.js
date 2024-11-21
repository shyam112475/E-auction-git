const Admin = require('../models/admin')

exports.signup = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name||!email||!password){
            res.status(400).json('all fields reuired')
        }
        const existingUser = await Admin.findOne({where:{email}});
        if(existingUser){
            res.status(400).json('user already exists pls try with another email')
        }
        const hashpassword = await bcrypt.hash(password,10)
        const user =  new Admin({name:name,email:email,password:hashpassword})
        const data = await user.save()
        res.status(201).json(data)
    }catch(err){
        res.status(500).json('internal servar error'+err)
    }
    
}
exports.signin = async(req,res) => {
    try{
        const {email,password} = req.body;
        const user = await Admin.findOne({where:{email}});
        if(!user){
            res.status(400).json('invalid user name or password')
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            res.status(400).json('invalid username or password')
        }
        const token =  jwt.sign(email,process.env.SECKEY)
        res.cookie('token',token)
        res.status(400).json('user signed In in')
    }catch(err){
        res.status(500).json('internal server error'+err)
    }
}