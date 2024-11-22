const auctionController = require('../controllers/auctionController')

const express = require('express')

const router = express.Router()

router.route('/artwork').post(auctionController.orgnizeAuction)

module.exports = router

