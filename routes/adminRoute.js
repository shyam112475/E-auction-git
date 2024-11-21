const admincontroller = require('../controllers/adminController')

const express = require('express');

const router = express.Router()

router.route('/signup').post(admincontroller.signup)
router.route('/signin').post(admincontroller.signin)

module.exports = router