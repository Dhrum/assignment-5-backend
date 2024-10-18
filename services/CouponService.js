// services/CouponService.js
const Coupon = require('../models/Coupon');
const DatabaseService = require('./DatabaseService');

class CouponService {
    static async createCoupon(data) {
        return await DatabaseService.create(Coupon, data);
    }

    static async getCoupons(query) {
        return await DatabaseService.find(Coupon, query);
    }

    static async getCouponById(id) {
        return await DatabaseService.findOne(Coupon, { _id: id });
    }

    static async updateCoupon(id, data) {
        return await DatabaseService.update(Coupon, id, data);
    }

    static async deleteCoupon(id) {
        return await DatabaseService.delete(Coupon, id);
    }
}

module.exports = CouponService;
