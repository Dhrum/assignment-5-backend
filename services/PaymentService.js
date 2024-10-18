// services/PaymentService.js
const Payment = require('../models/Payment');
const DatabaseService = require('./DatabaseService');

class PaymentService {
    static async createPayment(data) {
        return await DatabaseService.create(Payment, data);
    }

    static async getPayments(query) {
        return await DatabaseService.find(Payment, query);
    }

    static async getPaymentById(id) {
        return await DatabaseService.findOne(Payment, { _id: id });
    }

    static async updatePayment(id, data) {
        return await DatabaseService.update(Payment, id, data);
    }

    static async deletePayment(id) {
        return await DatabaseService.delete(Payment, id);
    }
}

module.exports = PaymentService;
