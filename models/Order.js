// models/Order.js
const mongoose = require('mongoose');

const OrderItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [OrderItemSchema],
    totalAmount: { type: Number, required: true },
    discountApplied: {
        couponId: { type: mongoose.Schema.Types.ObjectId, ref: 'Coupon' },
        discountValue: Number
    },
    finalAmount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['Credit Card', 'PayPal', 'Cash on Delivery'] },
    paymentStatus: { type: String, enum: ['Paid', 'Pending', 'Failed'] },
    deliveryStatus: { type: String, enum: ['Processing', 'Shipped', 'Delivered', 'Returned'] },
    deliveryAddress: {
        street: String,
        city: String,
        postalCode: String,
        country: String
    },
    deliveryOptions: {
        type: String, // e.g., "Standard", "Express"
        cost: Number
    },
    returnPolicy: String,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
