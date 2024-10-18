// routes/wishlistRoutes.js
const express = require('express');
const WishlistController = require('../controllers/wishlistController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Accessible by authenticated users
router.post('/', authMiddleware, WishlistController.createWishlist);
router.get('/', authMiddleware, WishlistController.getWishlists);
router.get('/:id', authMiddleware, WishlistController.getWishlistById);
router.put('/:id', authMiddleware, WishlistController.updateWishlist);
router.delete('/:id', authMiddleware, WishlistController.deleteWishlist);

module.exports = router;
