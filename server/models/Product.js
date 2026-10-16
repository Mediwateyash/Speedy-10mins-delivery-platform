const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name:          { type: String, required: true, trim: true },
  category:      { type: String, required: true, lowercase: true },
  price:         { type: Number, required: true, min: 0 },
  mrp:           { type: Number, required: true, min: 0 },
  discount:      { type: Number, default: 0, min: 0, max: 100 },
  emoji:         { type: String, default: '🛒' },
  bgColor:       { type: String, default: '#f0f8ff' },
  unit:          { type: String, default: '' },
  description:   { type: String, default: '' },
  rating:        { type: Number, default: 4.5, min: 0, max: 5 },
  reviews:       { type: Number, default: 0 },
  inStock:       { type: Boolean, default: true },
  isTrending:    { type: Boolean, default: false },
  isFlashDeal:   { type: Boolean, default: false },
  isWeekendDeal: { type: Boolean, default: false },
  isExclusive:   { type: Boolean, default: false },
  shopByNeed:    { type: [String], default: [] },
}, { timestamps: true });

productSchema.virtual('discountedPrice').get(function () {
  return this.mrp - Math.round((this.mrp * this.discount) / 100);
});

module.exports = mongoose.model('Product', productSchema);
