// services/PermissionService.js
const Permission = require('../models/Permission');
const DatabaseService = require('./DatabaseService');

class PermissionService {
    static async createPermission(data) {
        return await DatabaseService.create(Permission, data);
    }

    static async getPermissions(query) {
        return await DatabaseService.find(Permission, query);
    }

    static async getPermissionByRole(role) {
        return await DatabaseService.findOne(Permission, { role: role });
    }

    static async updatePermission(id, data) {
        return await DatabaseService.update(Permission, id, data);
    }

    static async deletePermission(id) {
        return await DatabaseService.delete(Permission, id);
    }
}

module.exports = PermissionService;
