// services/CartService.js
const Cart = require('../models/Cart');
const DatabaseService = require('./DatabaseService');

class CartService {
    static async createCart(data) {
        return await DatabaseService.create(Cart, data);
    }

    static async getCarts(query) {
        return await DatabaseService.find(Cart, query);
    }

    static async getCartById(id) {
        return await DatabaseService.findOne(Cart, { _id: id });
    }

    static async updateCart(id, data) {
        return await DatabaseService.update(Cart, id, data);
    }

    static async deleteCart(id) {
        return await DatabaseService.delete(Cart, id);
    }
}

module.exports = CartService;
