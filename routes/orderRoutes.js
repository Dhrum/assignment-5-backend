// routes/orderRoutes.js
const express = require('express');
const OrderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Accessible by authenticated users
router.post('/', authMiddleware, OrderController.createOrder);
router.get('/', authMiddleware, OrderController.getOrders);
router.get('/:id', authMiddleware, OrderController.getOrderById);

// Accessible only by admins
router.put('/:id', authMiddleware, roleMiddleware(['canEditOrders']), OrderController.updateOrder);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteOrders']), OrderController.deleteOrder);

module.exports = router;
