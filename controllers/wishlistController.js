// controllers/wishlistController.js
const WishlistService = require('../services/WishlistService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class WishlistController {
    static async createWishlist(req, res) {
        try {
            const wishlist = await WishlistService.createWishlist(req.body);
            ResponseHandler.created(res, wishlist);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getWishlists(req, res) {
        try {
            const wishlists = await WishlistService.getWishlists({});
            ResponseHandler.success(res, wishlists);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getWishlistById(req, res) {
        try {
            const wishlist = await WishlistService.getWishlistById(req.params.id);
            if (!wishlist) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Wishlist not found'));
            }
            ResponseHandler.success(res, wishlist);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateWishlist(req, res) {
        try {
            const wishlist = await WishlistService.updateWishlist(req.params.id, req.body);
            if (!wishlist) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Wishlist not found'));
            }
            ResponseHandler.success(res, wishlist, 'Wishlist updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteWishlist(req, res) {
        try {
            const result = await WishlistService.deleteWishlist(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Wishlist not found'));
            }
            ResponseHandler.success(res, null, 'Wishlist deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = WishlistController;
