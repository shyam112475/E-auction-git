const jwt = require('jsonwebtoken')
function verifyToken(req,res,next){
    try{
    const token = req.cookies.token;
    if(!token){
        return res.status(401).json('unuthorized')
    }
    const decoded = jwt.verify(token,process.env.SECKEY)
    req.user = decoded;
    next()
}catch(err){
    res.status(500).json('invalid token')
}
}

module.exports = verifyToken;