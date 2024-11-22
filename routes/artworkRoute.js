const arttworkController = require('../controllers/artworkcontroller')

const express = require('express')

const router = express.Router()

router.route('/artwork').post(arttworkController.artdetails)

module.exports = router

