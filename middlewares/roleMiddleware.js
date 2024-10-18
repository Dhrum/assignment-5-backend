// middlewares/roleMiddleware.js
const PermissionService = require('../services/PermissionService');

const roleMiddleware = (requiredPermissions) => {
    return async (req, res, next) => {
        try {
            const { role } = req.user;
            const permission = await PermissionService.getPermissionByRole(role);
            if (!permission) return res.status(403).json({ message: 'No permission found.' });

            const hasPermission = requiredPermissions.every(perm => permission.permissions[perm]);
            if (!hasPermission) return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });

            next();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
};

module.exports = roleMiddleware;
