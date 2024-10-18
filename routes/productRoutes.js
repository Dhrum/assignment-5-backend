// routes/productRoutes.js
const express = require('express');
const ProductController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware'); // Keep this for protected routes
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Public routes (no authentication required)
router.get('/', ProductController.getProducts); // List all products
router.get('/:id', ProductController.getProductById); // Get product by ID

// Protected routes (authentication required)
router.post('/', authMiddleware, roleMiddleware(['canEditProducts']), ProductController.createProduct);
router.put('/:id', authMiddleware, roleMiddleware(['canEditProducts']), ProductController.updateProduct);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteProducts']), ProductController.deleteProduct);

module.exports = router;
