// routes/reviewRoutes.js
const express = require('express');
const ReviewController = require('../controllers/reviewController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Accessible by authenticated users
router.post('/', authMiddleware, ReviewController.createReview);
router.get('/', authMiddleware, ReviewController.getReviews);
router.get('/:id', authMiddleware, ReviewController.getReviewById);
router.put('/:id', authMiddleware, ReviewController.updateReview);
router.delete('/:id', authMiddleware, ReviewController.deleteReview);

module.exports = router;
