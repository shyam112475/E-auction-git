const notificationController = require('../controllers/notificationController')

const express = require('express')
const router = express.Router()

router.route('/place').post(notificationController.alert)

module.exports = router