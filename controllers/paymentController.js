// controllers/paymentController.js
const PaymentService = require('../services/PaymentService');

class PaymentController {
    static async createPayment(req, res) {
        try {
            const payment = await PaymentService.createPayment(req.body);
            res.status(201).json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getPayments(req, res) {
        try {
            const payments = await PaymentService.getPayments({});
            res.status(200).json(payments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getPaymentById(req, res) {
        try {
            const payment = await PaymentService.getPaymentById(req.params.id);
            if (!payment) return res.status(404).json({ message: 'Payment not found' });
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatePayment(req, res) {
        try {
            const payment = await PaymentService.updatePayment(req.params.id, req.body);
            if (!payment) return res.status(404).json({ message: 'Payment not found' });
            res.status(200).json(payment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletePayment(req, res) {
        try {
            const result = await PaymentService.deletePayment(req.params.id);
            if (!result) return res.status(404).json({ message: 'Payment not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PaymentController;
