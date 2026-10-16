const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  name:     String,
  price:    Number,
  quantity: Number,
  emoji:    String,
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user:            { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items:           [orderItemSchema],
  total:           { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  deliveryTime:    { type: String, default: '10 minutes' },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'confirmed', 'out_for_delivery', 'delivered', 'cancelled'],
  },
  paymentMethod:   { type: String, default: 'cod', enum: ['cod', 'online'] },
  paymentStatus:   { type: String, default: 'pending', enum: ['pending', 'paid', 'failed'] },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
