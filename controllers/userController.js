// controllers/userController.js
const UserService = require('../services/UserService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class UserController {
    static async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            ResponseHandler.created(res, user);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getUsers(req, res) {
        try {
            const users = await UserService.getUsers({});
            ResponseHandler.success(res, users);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getUserById(req, res) {
        try {
            const user = await UserService.getUserById(req.params.id);
            if (!user) {
                return ResponseHandler.error(res, ErrorHandler.notFound('User not found'));
            }
            ResponseHandler.success(res, user);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req.params.id, req.body);
            if (!user) {
                return ResponseHandler.error(res, ErrorHandler.notFound('User not found'));
            }
            ResponseHandler.success(res, user, 'User updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteUser(req, res) {
        try {
            const result = await UserService.deleteUser(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('User not found'));
            }
            ResponseHandler.success(res, null, 'User deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = UserController;
