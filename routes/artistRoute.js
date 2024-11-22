const artistController = require('../controllers/artistController')

const express = require('express')
const router = express.Router()

router.route('/profile').post(artistController.artistinfo)

module.exports = router