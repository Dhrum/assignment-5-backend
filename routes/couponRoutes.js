// routes/couponRoutes.js
const express = require('express');
const CouponController = require('../controllers/couponController');
const authMiddleware = require('../middlewares/authMiddleware');
const roleMiddleware = require('../middlewares/roleMiddleware');

const router = express.Router();

// Accessible by admins
router.post('/', authMiddleware, roleMiddleware(['canCreateUser']), CouponController.createCoupon);
router.get('/', authMiddleware, CouponController.getCoupons);
router.get('/:id', authMiddleware, CouponController.getCouponById);
router.put('/:id', authMiddleware, roleMiddleware(['canEditUsers']), CouponController.updateCoupon);
router.delete('/:id', authMiddleware, roleMiddleware(['canDeleteUsers']), CouponController.deleteCoupon);

module.exports = router;
