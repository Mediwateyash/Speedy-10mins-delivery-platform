const Product = require('./models/Product');

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany([
      // ─── Trending / Popular Products ──────────────────────────────────────
      { name: 'Amul Taaza Milk 1L',      category: 'dairy',         price: 54,  mrp: 63,  discount: 13, emoji: '🥛', bgColor: '#e3f2fd', unit: '1L',   rating: 4.8, reviews: 131, isTrending: true,  isFlashDeal: false, isWeekendDeal: true,  shopByNeed: ['breakfast'] },
      { name: "Lay's Classic Chips 52g", category: 'snacks',        price: 20,  mrp: 25,  discount: 20, emoji: '🍟', bgColor: '#fff8e1', unit: '52g',  rating: 4.8, reviews: 130, isTrending: true,  isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['movie', 'party'] },
      { name: 'Coca-Cola 750ml',         category: 'beverages',     price: 45,  mrp: 60,  discount: 25, emoji: '🥤', bgColor: '#fce4ec', unit: '750ml', rating: 4.5, reviews: 191, isTrending: true,  isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['party', 'movie'] },
      { name: 'Tata Salt 1kg',           category: 'groceries',     price: 28,  mrp: 32,  discount: 13, emoji: '🧂', bgColor: '#f3e5f5', unit: '1kg',  rating: 4.7, reviews: 57,  isTrending: true,  isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['daily'] },
      { name: 'Dove Body Wash 250ml',    category: 'personal-care', price: 119, mrp: 150, discount: 21, emoji: '🧴', bgColor: '#e8eaf6', unit: '250ml', rating: 4.5, reviews: 34,  isTrending: true,  isFlashDeal: false, isWeekendDeal: true,  shopByNeed: ['daily'] },
      { name: 'Surf Excel 1kg',          category: 'household',     price: 135, mrp: 180, discount: 25, emoji: '🧺', bgColor: '#e0f2f1', unit: '1kg',  rating: 4.4, reviews: 71,  isTrending: true,  isFlashDeal: false, isWeekendDeal: true,  shopByNeed: ['daily'] },
      // ─── Groceries ─────────────────────────────────────────────────────────
      { name: 'Basmati Rice 5kg',        category: 'groceries',     price: 299, mrp: 350, discount: 15, emoji: '🍚', bgColor: '#fffde7', unit: '5kg',  rating: 4.6, reviews: 89,  isTrending: false, isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['daily'] },
      { name: 'Aashirvaad Atta 10kg',    category: 'groceries',     price: 389, mrp: 450, discount: 14, emoji: '🌾', bgColor: '#fff3e0', unit: '10kg', rating: 4.7, reviews: 112, isTrending: false, isFlashDeal: false, isWeekendDeal: true,  shopByNeed: ['breakfast', 'daily'] },
      { name: 'Turmeric Powder 200g',    category: 'groceries',     price: 55,  mrp: 65,  discount: 15, emoji: '🌿', bgColor: '#f9fbe7', unit: '200g', rating: 4.5, reviews: 42,  isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['daily'] },
      { name: 'Sunflower Oil 1L',        category: 'groceries',     price: 135, mrp: 160, discount: 16, emoji: '🫙', bgColor: '#fff8e1', unit: '1L',   rating: 4.4, reviews: 63,  isTrending: false, isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['daily'] },
      // ─── Snacks ────────────────────────────────────────────────────────────
      { name: 'Kurkure Masala Munch',    category: 'snacks',        price: 10,  mrp: 10,  discount: 0,  emoji: '🍿', bgColor: '#fff8e1', unit: '38g',  rating: 4.6, reviews: 200, isTrending: true,  isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['movie', 'party'] },
      { name: 'Haldirams Aloo Bhujia',   category: 'snacks',        price: 99,  mrp: 120, discount: 18, emoji: '🥜', bgColor: '#fff3e0', unit: '400g', rating: 4.7, reviews: 156, isTrending: false, isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['movie', 'party'] },
      { name: 'Good Day Biscuits',       category: 'snacks',        price: 35,  mrp: 40,  discount: 13, emoji: '🍪', bgColor: '#fce4ec', unit: '150g', rating: 4.5, reviews: 78,  isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['breakfast'] },
      { name: 'Dark Fantasy Cookies',    category: 'snacks',        price: 55,  mrp: 65,  discount: 15, emoji: '🍫', bgColor: '#f3e5f5', unit: '100g', rating: 4.8, reviews: 94,  isTrending: true,  isFlashDeal: false, isWeekendDeal: true,  shopByNeed: ['movie'] },
      // ─── Beverages ─────────────────────────────────────────────────────────
      { name: 'Paperboat Aamras 200ml',  category: 'beverages',     price: 30,  mrp: 35,  discount: 14, emoji: '🥭', bgColor: '#fff3e0', unit: '200ml', rating: 4.7, reviews: 88, isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['party'] },
      { name: 'Tropicana Orange 1L',     category: 'beverages',     price: 99,  mrp: 120, discount: 18, emoji: '🍊', bgColor: '#fff3e0', unit: '1L',   rating: 4.6, reviews: 67,  isTrending: false, isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['breakfast'] },
      { name: 'Nescafe Classic 50g',     category: 'beverages',     price: 155, mrp: 185, discount: 16, emoji: '☕', bgColor: '#efebe9', unit: '50g',  rating: 4.8, reviews: 142, isTrending: true,  isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['breakfast'] },
      { name: 'Sprite 750ml',            category: 'beverages',     price: 40,  mrp: 55,  discount: 27, emoji: '🫧', bgColor: '#e0f7fa', unit: '750ml', rating: 4.4, reviews: 73, isTrending: false, isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['party', 'movie'] },
      // ─── Dairy ─────────────────────────────────────────────────────────────
      { name: 'Amul Butter 100g',        category: 'dairy',         price: 55,  mrp: 60,  discount: 8,  emoji: '🧈', bgColor: '#fff9c4', unit: '100g', rating: 4.9, reviews: 210, isTrending: true,  isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['breakfast'] },
      { name: 'Britannia Cheese Slices', category: 'dairy',         price: 99,  mrp: 120, discount: 18, emoji: '🧀', bgColor: '#fff8e1', unit: '200g', rating: 4.6, reviews: 88,  isTrending: false, isFlashDeal: true,  isWeekendDeal: false, shopByNeed: ['breakfast', 'party'] },
      { name: 'Mother Dairy Curd 400g',  category: 'dairy',         price: 45,  mrp: 50,  discount: 10, emoji: '🥣', bgColor: '#e8f5e9', unit: '400g', rating: 4.7, reviews: 123, isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['daily'] },
      // ─── Personal Care ──────────────────────────────────────────────────────
      { name: 'Colgate MaxFresh 150g',   category: 'personal-care', price: 89,  mrp: 110, discount: 19, emoji: '🦷', bgColor: '#e8eaf6', unit: '150g', rating: 4.6, reviews: 95,  isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['daily'] },
      { name: 'Head & Shoulders 340ml',  category: 'personal-care', price: 289, mrp: 350, discount: 17, emoji: '🚿', bgColor: '#e3f2fd', unit: '340ml', rating: 4.5, reviews: 67, isTrending: false, isFlashDeal: true,  isWeekendDeal: true,  shopByNeed: ['daily'] },
      // ─── Household ──────────────────────────────────────────────────────────
      { name: 'Harpic Toilet Cleaner',   category: 'household',     price: 79,  mrp: 95,  discount: 17, emoji: '🧹', bgColor: '#f3e5f5', unit: '500ml', rating: 4.4, reviews: 52, isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['daily'] },
      { name: 'Vim Dishwash Liquid',     category: 'household',     price: 99,  mrp: 120, discount: 18, emoji: '🫧', bgColor: '#e0f7fa', unit: '750ml', rating: 4.5, reviews: 76, isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: ['daily'] },
      // ─── Baby Care ──────────────────────────────────────────────────────────
      { name: "Johnson's Baby Lotion",   category: 'baby-care',     price: 149, mrp: 180, discount: 17, emoji: '👶', bgColor: '#fff9c4', unit: '200ml', rating: 4.8, reviews: 140, isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: [] },
      { name: 'Pampers Diapers M-10',    category: 'baby-care',     price: 299, mrp: 350, discount: 15, emoji: '🍼', bgColor: '#fce4ec', unit: 'M-10', rating: 4.7, reviews: 98,  isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: [] },
      // ─── Pet Care ───────────────────────────────────────────────────────────
      { name: "Pedigree Adult Dog Food", category: 'pet-care',      price: 399, mrp: 450, discount: 11, emoji: '🐾', bgColor: '#e8f5e9', unit: '3kg',  rating: 4.8, reviews: 110, isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: [] },
      { name: "Whiskas Cat Food 85g",    category: 'pet-care',      price: 45,  mrp: 55,  discount: 18, emoji: '🐱', bgColor: '#fce4ec', unit: '85g',  rating: 4.6, reviews: 75,  isTrending: false, isFlashDeal: false, isWeekendDeal: false, shopByNeed: [] },
    ]);
    console.log('✅ Database seeded with', 29, 'products');
  } catch (err) {
    console.error('❌ Seed error:', err.message);
  }
};

module.exports = seedProducts;
