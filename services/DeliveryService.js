// services/DeliveryService.js
const Delivery = require('../models/Delivery');
const DatabaseService = require('./DatabaseService');

class DeliveryService {
    static async createDelivery(data) {
        return await DatabaseService.create(Delivery, data);
    }

    static async getDeliveries(query) {
        return await DatabaseService.find(Delivery, query);
    }

    static async getDeliveryById(id) {
        return await DatabaseService.findOne(Delivery, { _id: id });
    }

    static async updateDelivery(id, data) {
        return await DatabaseService.update(Delivery, id, data);
    }

    static async deleteDelivery(id) {
        return await DatabaseService.delete(Delivery, id);
    }
}

module.exports = DeliveryService;
