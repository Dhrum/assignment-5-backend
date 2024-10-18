// models/Product.js
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating: { type: Number, min: 1, max: 5 },
    comment: String,
    date: { type: Date, default: Date.now },
    reviewerName: String,
    reviewerEmail: String
});

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discountPercentage: { type: Number },
    rating: { type: Number, min: 1, max: 5 },
    stock: { type: Number, required: true },
    tags: [String],
    brand: String,
    sku: String,
    weight: Number,
    dimensions: {
        width: Number,
        height: Number,
        depth: Number
    },
    warrantyInformation: String,
    shippingInformation: String,
    availabilityStatus: { type: String, enum: ['In Stock', 'Low Stock', 'Out of Stock'] },
    reviews: [ReviewSchema],
    returnPolicy: String,
    minimumOrderQuantity: Number,
    meta: {
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
        barcode: String,
        qrCode: String
    },
    images: [String], // Array of image URLs
    thumbnail: String
}, { collection: 'Products' });

module.exports = mongoose.model('Product', ProductSchema);
