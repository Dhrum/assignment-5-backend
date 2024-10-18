// services/UserService.js
const User = require('../models/User');
const DatabaseService = require('./DatabaseService');

class UserService {
    static async createUser(data) {
        return await DatabaseService.create(User, data);
    }

    static async getUsers(query) {
        return await DatabaseService.find(User, query);
    }

    static async getUserById(id) {
        return await DatabaseService.findOne(User, { _id: id });
    }

    static async updateUser(id, data) {
        return await DatabaseService.update(User, id, data);
    }

    static async deleteUser(id) {
        return await DatabaseService.delete(User, id);
    }
}

module.exports = UserService;
