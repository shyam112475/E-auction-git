const bidController = require('../controllers/bidController')

const express = require('express')
const router = express.Router()

router.route('/place').post(bidController.placebid)

module.exports = router