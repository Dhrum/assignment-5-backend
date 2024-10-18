// services/ProductService.js
const Product = require('../models/Product');
const DatabaseService = require('./DatabaseService');

class ProductService {
    static async createProduct(data) {
        return await DatabaseService.create(Product, data);
    }

    static async getProducts(query = {}) {
        return await DatabaseService.find(Product, query); // Ensure this is querying the database properly
    }

    static async getProductById(id) {
        return await DatabaseService.findOne(Product, { id: parseInt(id) });
    }

    static async updateProduct(id, data) {
        return await DatabaseService.update(Product, id, data);
    }

    static async deleteProduct(id) {
        return await DatabaseService.delete(Product, id);
    }
}

module.exports = ProductService;
