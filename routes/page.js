const express = require('express')
const verifyToken = require('../middlewares/auth')


const router = express.Router()

router.get('/index',verifyToken,(req,res)=>{
    res.send('thise is the index page')
})

module.exports = router;