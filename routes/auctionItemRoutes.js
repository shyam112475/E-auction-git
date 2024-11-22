const auctionItemControllers = require('../controllers/auctionItemController')

const express = require('express')

const router = express.Router()

router.route('/add').post(auctionItemControllers.addAuctionItems)

module.exports = router

