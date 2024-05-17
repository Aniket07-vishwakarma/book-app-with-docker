const express = require('express')
const router = express.Router();
const UserContoller = require('../controller/user.controller')
router.get('/', UserContoller.getUsers)
router.post('/create', UserContoller.createUser)
router.get('/:id', UserContoller.getUser)
router.put('/update/:id', UserContoller.updateUser)
router.delete('/delete/:id', UserContoller.deleteUser)
module.exports = router;

