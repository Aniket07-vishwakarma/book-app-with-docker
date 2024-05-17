const express = require('express');
const router = express.Router();
const authController = require('../controller/auth.controller');
const favoriteController = require('../controller/favorite.controller');

router.get('/',   favoriteController.getFavoriteBooks);
router.post('/',  favoriteController.addFavorite);
router.delete('/:id', favoriteController.deleteFavoriteBook);

module.exports = router;