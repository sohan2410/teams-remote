const router = require('express').Router()

const authController = require('../controllers/auth')

router.post('/signup', authController.singUp)

module.exports = router
