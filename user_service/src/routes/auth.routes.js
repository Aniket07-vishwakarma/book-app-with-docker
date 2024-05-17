const express = require('express')
const router = express.Router();
const authController = require('../controller/auth.controller')
router.post('/login', authController.login)
router.get('/ref/:id', authController.verifyToken , authController.getData)
module.exports = router