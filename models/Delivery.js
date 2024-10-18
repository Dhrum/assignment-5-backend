// models/Delivery.js
const mongoose = require('mongoose');

const DeliveryUpdateSchema = new mongoose.Schema({
    status: String,
    date: { type: Date, default: Date.now }
});

const DeliverySchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
    courierService: String,
    trackingNumber: String,
    estimatedDelivery: Date,
    deliveryStatus: { type: String, enum: ['In Transit', 'Delivered', 'Cancelled'] },
    deliveryUpdates: [DeliveryUpdateSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Delivery', DeliverySchema);
