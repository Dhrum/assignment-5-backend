// routes/deliveryRoutes.js
const express = require('express');
const DeliveryController = require('../controllers/deliveryController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Accessible by admins
router.post('/', authMiddleware, roleMiddleware(['canEditOrders']), DeliveryController.createDelivery);
router.get('/', authMiddleware, roleMiddleware(['canViewOrders']), DeliveryController.getDeliveries);
router.get('/:id', authMiddleware, roleMiddleware(['canViewOrders']), DeliveryController.getDeliveryById);
router.put('/:id', authMiddleware, roleMiddleware(['canEditOrders']), DeliveryController.updateDelivery);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteOrders']), DeliveryController.deleteDelivery);

module.exports = router;
