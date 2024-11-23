const usercontrollers = require('../controllers/userController')

const express = require('express');

const router = express.Router()

router.route('/register').post(usercontrollers.signup)
router.route('/login').post(usercontrollers.signin)
router.route('/update').post(usercontrollers.updateUser)
router.route('/delete').post(usercontrollers.deleteUser)

module.exports = router