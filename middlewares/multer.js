const express = require('express')
const app = express()
const multer = require('multer');

const diskStorage = multer.diskStorage({
    destination:function (req,file,cb){
        return cb(null, './uloads')
    },
    filename:function (req,file,cb){
        return cb(null,`${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({diskStorage:diskStorage})

module.exports = upload; // middleware for upload images