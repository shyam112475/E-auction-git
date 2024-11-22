const paymentController = require('../controllers/paymentController')

const express = require('express')
const router = express.Router()

router.route('/make').post(paymentController.makepayment)

module.exports = router