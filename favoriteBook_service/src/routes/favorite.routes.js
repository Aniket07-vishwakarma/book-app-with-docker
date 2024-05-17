const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const favoriteController = require('../controllers/favorite.controller');

router.get('/',  authController.verifyToken, favoriteController.getFavoriteBooks);
router.post('/', authController.verifyToken, favoriteController.addFavorite);
router.delete('/:id', authController.verifyToken, favoriteController.deleteFavoriteBook);

module.exports = router;