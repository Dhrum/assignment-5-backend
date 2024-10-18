// controllers/reviewController.js
const ReviewService = require('../services/ReviewService');
const ResponseHandler = require('../utils/responseHandler');
const ErrorHandler = require('../utils/errorHandler');

class ReviewController {
    static async createReview(req, res) {
        try {
            const review = await ReviewService.createReview(req.body);
            ResponseHandler.created(res, review);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getReviews(req, res) {
        try {
            const reviews = await ReviewService.getReviews({});
            ResponseHandler.success(res, reviews);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async getReviewById(req, res) {
        try {
            const review = await ReviewService.getReviewById(req.params.id);
            if (!review) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Review not found'));
            }
            ResponseHandler.success(res, review);
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async updateReview(req, res) {
        try {
            const review = await ReviewService.updateReview(req.params.id, req.body);
            if (!review) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Review not found'));
            }
            ResponseHandler.success(res, review, 'Review updated successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }

    static async deleteReview(req, res) {
        try {
            const result = await ReviewService.deleteReview(req.params.id);
            if (!result) {
                return ResponseHandler.error(res, ErrorHandler.notFound('Review not found'));
            }
            ResponseHandler.success(res, null, 'Review deleted successfully');
        } catch (error) {
            ResponseHandler.error(res, ErrorHandler.internalError(error.message));
        }
    }
}

module.exports = ReviewController;
