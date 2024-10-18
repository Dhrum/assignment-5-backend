// routes/cartRoutes.js
const express = require('express');
const CartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Accessible by authenticated users
router.post('/', authMiddleware, CartController.createCart);
router.get('/', authMiddleware, CartController.getCarts);
router.get('/:id', authMiddleware, CartController.getCartById);
router.put('/:id', authMiddleware, CartController.updateCart);
router.delete('/:id', authMiddleware, CartController.deleteCart);

module.exports = router;
