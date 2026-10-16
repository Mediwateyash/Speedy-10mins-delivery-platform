const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products — with filtering
router.get('/', async (req, res) => {
  try {
    const { category, trending, flash, weekend, exclusive, limit = 20, search } = req.query;
    let query = {};
    if (category)          query.category      = category;
    if (trending === 'true')  query.isTrending    = true;
    if (flash === 'true')     query.isFlashDeal   = true;
    if (weekend === 'true')   query.isWeekendDeal = true;
    if (exclusive === 'true') query.isExclusive   = true;
    if (search) query.name = { $regex: search, $options: 'i' };
    const products = await Product.find(query).limit(parseInt(limit)).sort({ createdAt: -1 });
    res.json({ success: true, count: products.length, data: products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET /api/products/:id
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST /api/products (admin)
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// PUT /api/products/:id (admin)
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json({ success: true, data: product });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

// DELETE /api/products/:id (admin)
router.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
