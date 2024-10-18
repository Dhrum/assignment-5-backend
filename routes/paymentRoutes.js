// routes/paymentRoutes.js
const express = require('express');
const PaymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Accessible by authenticated users
router.post('/', authMiddleware, PaymentController.createPayment);
router.get('/', authMiddleware, PaymentController.getPayments);
router.get('/:id', authMiddleware, PaymentController.getPaymentById);

// Accessible only by admins
router.put('/:id', authMiddleware, roleMiddleware(['canEditOrders']), PaymentController.updatePayment);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteOrders']), PaymentController.deletePayment);

module.exports = router;
