// services/ReviewService.js
const Review = require('../models/Review');
const DatabaseService = require('./DatabaseService');

class ReviewService {
    static async createReview(data) {
        return await DatabaseService.create(Review, data);
    }

    static async getReviews(query) {
        return await DatabaseService.find(Review, query);
    }

    static async getReviewById(id) {
        return await DatabaseService.findOne(Review, { _id: id });
    }

    static async updateReview(id, data) {
        return await DatabaseService.update(Review, id, data);
    }

    static async deleteReview(id) {
        return await DatabaseService.delete(Review, id);
    }
}

module.exports = ReviewService;
