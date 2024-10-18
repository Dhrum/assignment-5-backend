// models/Permission.js
const mongoose = require('mongoose');

const PermissionSchema = new mongoose.Schema({
    role: { type: String, required: true, unique: true },
    permissions: {
        canCreateAdmin: { type: Boolean, default: false },
        canCreateModerator: { type: Boolean, default: false },
        canCreateUser: { type: Boolean, default: false },
        canEditUsers: { type: Boolean, default: false },
        canDeleteUsers: { type: Boolean, default: false },
        canViewProducts: { type: Boolean, default: false },
        canEditProducts: { type: Boolean, default: false },
        canDeleteProducts: { type: Boolean, default: false },
        canViewOrders: { type: Boolean, default: false },
        canEditOrders: { type: Boolean, default: false },
        canDeleteOrders: { type: Boolean, default: false }
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Permission', PermissionSchema);
