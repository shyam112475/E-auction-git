const usercontrollers = require('../controllers/userController')

const express = require('express');

const router = express.Router()

router.route('/register').post(usercontrollers.signup)
router.route('/login').post(usercontrollers.signin)

module.exports = router