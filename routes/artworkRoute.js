const arttworkController = require('../controllers/artworkcontroller')

const express = require('express')

const router = express.Router()

router.route('/upload').post(arttworkController.artdetails)

module.exports = router

