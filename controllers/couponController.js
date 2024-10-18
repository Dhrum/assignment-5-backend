// controllers/couponController.js
const CouponService = require('../services/CouponService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class CouponController {
    static async createCoupon(req, res) {
        try {
            const coupon = await CouponService.createCoupon(req.body);
            ResponseHandler.created(res, coupon);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getCoupons(req, res) {
        try {
            const coupons = await CouponService.getCoupons({});
            ResponseHandler.success(res, coupons);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getCouponById(req, res) {
        try {
            const coupon = await CouponService.getCouponById(req.params.id);
            if (!coupon) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Coupon not found'));
            }
            ResponseHandler.success(res, coupon);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateCoupon(req, res) {
        try {
            const coupon = await CouponService.updateCoupon(req.params.id, req.body);
            if (!coupon) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Coupon not found'));
            }
            ResponseHandler.success(res, coupon, 'Coupon updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteCoupon(req, res) {
        try {
            const result = await CouponService.deleteCoupon(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Coupon not found'));
            }
            ResponseHandler.success(res, null, 'Coupon deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = CouponController;
