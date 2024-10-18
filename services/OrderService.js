// services/OrderService.js
const Order = require('../models/Order');
const DatabaseService = require('./DatabaseService');

class OrderService {
    static async createOrder(data) {
        return await DatabaseService.create(Order, data);
    }

    static async getOrders(query) {
        return await DatabaseService.find(Order, query);
    }

    static async getOrderById(id) {
        return await DatabaseService.findOne(Order, { _id: id });
    }

    static async updateOrder(id, data) {
        return await DatabaseService.update(Order, id, data);
    }

    static async deleteOrder(id) {
        return await DatabaseService.delete(Order, id);
    }
}

module.exports = OrderService;
