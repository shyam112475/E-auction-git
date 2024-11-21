const admincontrollers = require('../controllers/adminController')

const express = require('express');

const router = express.Router()

router.route('/signup').post(admincontrollers.signUp)
router.route('/signin').post(admincontrollers.signIn)

module.exports = router