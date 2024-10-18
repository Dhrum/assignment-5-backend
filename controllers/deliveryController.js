// controllers/deliveryController.js
const DeliveryService = require('../services/DeliveryService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class DeliveryController {
    static async createDelivery(req, res) {
        try {
            const delivery = await DeliveryService.createDelivery(req.body);
            ResponseHandler.created(res, delivery);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getDeliveries(req, res) {
        try {
            const deliveries = await DeliveryService.getDeliveries({});
            ResponseHandler.success(res, deliveries);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getDeliveryById(req, res) {
        try {
            const delivery = await DeliveryService.getDeliveryById(req.params.id);
            if (!delivery) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Delivery not found'));
            }
            ResponseHandler.success(res, delivery);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateDelivery(req, res) {
        try {
            const delivery = await DeliveryService.updateDelivery(req.params.id, req.body);
            if (!delivery) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Delivery not found'));
            }
            ResponseHandler.success(res, delivery, 'Delivery updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteDelivery(req, res) {
        try {
            const result = await DeliveryService.deleteDelivery(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Delivery not found'));
            }
            ResponseHandler.success(res, null, 'Delivery deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = DeliveryController;
