// controllers/orderController.js
const OrderService = require('../services/OrderService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class OrderController {
    static async createOrder(req, res) {
        try {
            const order = await OrderService.createOrder(req.body);
            ResponseHandler.created(res, order);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getOrders(req, res) {
        try {
            const orders = await OrderService.getOrders({});
            ResponseHandler.success(res, orders);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getOrderById(req, res) {
        try {
            const order = await OrderService.getOrderById(req.params.id);
            if (!order) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Order not found'));
            }
            ResponseHandler.success(res, order);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateOrder(req, res) {
        try {
            const order = await OrderService.updateOrder(req.params.id, req.body);
            if (!order) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Order not found'));
            }
            ResponseHandler.success(res, order, 'Order updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteOrder(req, res) {
        try {
            const result = await OrderService.deleteOrder(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Order not found'));
            }
            ResponseHandler.success(res, null, 'Order deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = OrderController;
