// services/WishlistService.js
const Wishlist = require('../models/Wishlist');
const DatabaseService = require('./DatabaseService');

class WishlistService {
    static async createWishlist(data) {
        return await DatabaseService.create(Wishlist, data);
    }

    static async getWishlists(query) {
        return await DatabaseService.find(Wishlist, query);
    }

    static async getWishlistById(id) {
        return await DatabaseService.findOne(Wishlist, { _id: id });
    }

    static async updateWishlist(id, data) {
        return await DatabaseService.update(Wishlist, id, data);
    }

    static async deleteWishlist(id) {
        return await DatabaseService.delete(Wishlist, id);
    }
}

module.exports = WishlistService;
