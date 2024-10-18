// services/ReturnService.js
const Return = require('../models/Return');
const DatabaseService = require('./DatabaseService');

class ReturnService {
    static async createReturn(data) {
        return await DatabaseService.create(Return, data);
    }

    static async getReturns(query) {
        return await DatabaseService.find(Return, query);
    }

    static async getReturnById(id) {
        return await DatabaseService.findOne(Return, { _id: id });
    }

    static async updateReturn(id, data) {
        return await DatabaseService.update(Return, id, data);
    }

    static async deleteReturn(id) {
        return await DatabaseService.delete(Return, id);
    }
}

module.exports = ReturnService;
