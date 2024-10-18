// routes/returnRoutes.js
const express = require('express');
const ReturnController = require('../controllers/returnController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Accessible by authenticated users
router.post('/', authMiddleware, ReturnController.createReturn);
router.get('/', authMiddleware, ReturnController.getReturns);
router.get('/:id', authMiddleware, ReturnController.getReturnById);

// Accessible by admins
router.put('/:id', authMiddleware, roleMiddleware(['canEditOrders']), ReturnController.updateReturn);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteOrders']), ReturnController.deleteReturn);

module.exports = router;
