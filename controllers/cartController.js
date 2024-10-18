// controllers/cartController.js
const CartService = require('../services/CartService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class CartController {
    static async createCart(req, res) {
        try {
            const cart = await CartService.createCart(req.body);
            ResponseHandler.created(res, cart);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getCarts(req, res) {
        try {
            const carts = await CartService.getCarts({});
            ResponseHandler.success(res, carts);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getCartById(req, res) {
        try {
            const cart = await CartService.getCartById(req.params.id);
            if (!cart) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Cart not found'));
            }
            ResponseHandler.success(res, cart);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateCart(req, res) {
        try {
            const cart = await CartService.updateCart(req.params.id, req.body);
            if (!cart) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Cart not found'));
            }
            ResponseHandler.success(res, cart, 'Cart updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteCart(req, res) {
        try {
            const result = await CartService.deleteCart(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Cart not found'));
            }
            ResponseHandler.success(res, null, 'Cart deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = CartController;
