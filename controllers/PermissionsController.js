// controllers/permissionController.js
const PermissionService = require('../services/PermissionService');

class PermissionController {
    static async createPermission(req, res) {
        try {
            const permission = await PermissionService.createPermission(req.body);
            res.status(201).json(permission);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getPermissions(req, res) {
        try {
            const permissions = await PermissionService.getPermissions({});
            res.status(200).json(permissions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getPermissionByRole(req, res) {
        try {
            const permission = await PermissionService.getPermissionByRole(req.params.role);
            if (!permission) return res.status(404).json({ message: 'Permission not found' });
            res.status(200).json(permission);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updatePermission(req, res) {
        try {
            const permission = await PermissionService.updatePermission(req.params.id, req.body);
            if (!permission) return res.status(404).json({ message: 'Permission not found' });
            res.status(200).json(permission);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deletePermission(req, res) {
        try {
            const result = await PermissionService.deletePermission(req.params.id);
            if (!result) return res.status(404).json({ message: 'Permission not found' });
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = PermissionController;
