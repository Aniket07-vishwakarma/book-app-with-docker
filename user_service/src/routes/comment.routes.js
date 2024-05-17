const express = require('express')
const router = express.Router();
const CommentController = require('../controller/comment.controller')
router.get('/', CommentController.getComments)
router.post('/create/:id', CommentController.createComment)
router.get('/:id', CommentController.getComment)
router.put('/update/:id', CommentController.updateComment)
router.delete('/delete/:id', CommentController.verifyToken,CommentController.deleteComment)
module.exports = router