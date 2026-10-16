// ─── Static Data for Speedy App ────────────────────────────────────────────────

export const categories = [
  { id: 1, name: 'Groceries',     emoji: '🛒', color: '#e8f5e9', textColor: '#2e7d32' },
  { id: 2, name: 'Snacks',        emoji: '🍿', color: '#fff8e1', textColor: '#f57f17' },
  { id: 3, name: 'Beverages',     emoji: '🥤', color: '#e3f2fd', textColor: '#1565c0' },
  { id: 4, name: 'Dairy',         emoji: '🥛', color: '#f3e5f5', textColor: '#6a1b9a' },
  { id: 5, name: 'Personal Care', emoji: '🧴', color: '#fce4ec', textColor: '#c62828' },
  { id: 6, name: 'Household',     emoji: '🏠', color: '#e0f7fa', textColor: '#00695c' },
  { id: 7, name: 'Baby Care',     emoji: '👶', color: '#fff9c4', textColor: '#f9a825' },
  { id: 8, name: 'Pet Care',      emoji: '🐾', color: '#fbe9e7', textColor: '#bf360c' },
];

export const products = [
  { id: 1,  name: 'Amul Taaza Milk 1L',      category: 'dairy',         price: 54,  mrp: 63,  discount: 13, emoji: '🥛', bgColor: '#e3f2fd', unit: '1L',   rating: 4.8, reviews: 131, isTrending: true,  isFlashDeal: false, isWeekendDeal: true  },
  { id: 2,  name: "Lay's Classic Chips 52g", category: 'snacks',        price: 20,  mrp: 25,  discount: 20, emoji: '🍟', bgColor: '#fff8e1', unit: '52g',  rating: 4.8, reviews: 130, isTrending: true,  isFlashDeal: true,  isWeekendDeal: false },
  { id: 3,  name: 'Coca-Cola 750ml',         category: 'beverages',     price: 45,  mrp: 60,  discount: 25, emoji: '🥤', bgColor: '#fce4ec', unit: '750ml', rating: 4.5, reviews: 191, isTrending: true,  isFlashDeal: true,  isWeekendDeal: false },
  { id: 4,  name: 'Tata Salt 1kg',           category: 'groceries',     price: 28,  mrp: 32,  discount: 13, emoji: '🧂', bgColor: '#f3e5f5', unit: '1kg',  rating: 4.7, reviews: 57,  isTrending: true,  isFlashDeal: false, isWeekendDeal: false },
  { id: 5,  name: 'Dove Body Wash 250ml',    category: 'personal-care', price: 119, mrp: 150, discount: 21, emoji: '🧴', bgColor: '#e8eaf6', unit: '250ml', rating: 4.5, reviews: 34, isTrending: true,  isFlashDeal: false, isWeekendDeal: true  },
  { id: 6,  name: 'Surf Excel 1kg',          category: 'household',     price: 135, mrp: 180, discount: 25, emoji: '🧺', bgColor: '#e0f2f1', unit: '1kg',  rating: 4.4, reviews: 71,  isTrending: true,  isFlashDeal: false, isWeekendDeal: true  },
  { id: 7,  name: 'Amul Butter 100g',        category: 'dairy',         price: 55,  mrp: 60,  discount: 8,  emoji: '🧈', bgColor: '#fff9c4', unit: '100g', rating: 4.9, reviews: 210, isTrending: true,  isFlashDeal: false, isWeekendDeal: false },
  { id: 8,  name: 'Nescafe Classic 50g',     category: 'beverages',     price: 155, mrp: 185, discount: 16, emoji: '☕', bgColor: '#efebe9', unit: '50g',  rating: 4.8, reviews: 142, isTrending: true,  isFlashDeal: false, isWeekendDeal: false },
  { id: 9,  name: 'Haldirams Aloo Bhujia',   category: 'snacks',        price: 99,  mrp: 120, discount: 18, emoji: '🥜', bgColor: '#fff3e0', unit: '400g', rating: 4.7, reviews: 156, isTrending: false, isFlashDeal: true,  isWeekendDeal: false },
  { id: 10, name: 'Dark Fantasy Cookies',    category: 'snacks',        price: 55,  mrp: 65,  discount: 15, emoji: '🍫', bgColor: '#fce4ec', unit: '100g', rating: 4.8, reviews: 94,  isTrending: true,  isFlashDeal: false, isWeekendDeal: true  },
  { id: 11, name: 'Basmati Rice 5kg',        category: 'groceries',     price: 299, mrp: 350, discount: 15, emoji: '🍚', bgColor: '#fffde7', unit: '5kg',  rating: 4.6, reviews: 89,  isTrending: false, isFlashDeal: true,  isWeekendDeal: false },
  { id: 12, name: 'Tropicana Orange 1L',     category: 'beverages',     price: 99,  mrp: 120, discount: 18, emoji: '🍊', bgColor: '#fff3e0', unit: '1L',   rating: 4.6, reviews: 67,  isTrending: false, isFlashDeal: true,  isWeekendDeal: false },
];

export const shopByNeed = [
  { id: 1, name: 'Breakfast Essentials', subtitle: 'Start your day right',       emoji: '🌅', color: '#ff9800', bgGrad: 'linear-gradient(135deg,#fff3e0,#ffe0b2)', products: [1, 7, 8]  },
  { id: 2, name: 'Movie Night',          subtitle: 'Snacks for every story',     emoji: '🎬', color: '#9c27b0', bgGrad: 'linear-gradient(135deg,#f3e5f5,#e1bee7)', products: [2, 10, 9] },
  { id: 3, name: 'Party Time',           subtitle: 'Drinks, snacks & more',      emoji: '🎉', color: '#e91e63', bgGrad: 'linear-gradient(135deg,#fce4ec,#f8bbd9)', products: [3, 9, 2]  },
  { id: 4, name: 'Daily Essentials',     subtitle: 'For a better tomorrow',      emoji: '📦', color: '#2196f3', bgGrad: 'linear-gradient(135deg,#e3f2fd,#bbdefb)', products: [4, 5, 6]  },
  { id: 5, name: 'Last-Minute Needs',    subtitle: 'Because life happens',       emoji: '⚡', color: '#f44336', bgGrad: 'linear-gradient(135deg,#ffebee,#ffcdd2)', products: [1, 3, 4]  },
];

export const testimonials = [
  { id: 1, name: 'Priya Sharma',  location: 'Mumbai',      avatar: '👩', rating: 5, review: 'Super fast delivery! Fresh products and great offers. Best quick commerce app so far!' },
  { id: 2, name: 'Rohit Mehta',   location: 'Thane',       avatar: '👨', rating: 5, review: 'Love the weekend deals and exclusive partner products. Always something new!' },
  { id: 3, name: 'Sneha Patil',   location: 'Navi Mumbai', avatar: '👩', rating: 5, review: 'Great quality, easy to use app and super quick delivery. Highly recommend!' },
  { id: 4, name: 'Aditya Verma',  location: 'Andheri',     avatar: '🧑', rating: 5, review: 'Perfect for last-minute needs! The 10-minute delivery is a game changer.' },
  { id: 5, name: 'Kavya Nair',    location: 'Bandra',      avatar: '👩', rating: 5, review: 'Amazing app! Prices are very competitive and delivery is always on time.' },
];

export const footerLinks = {
  Shop:     ['Groceries', 'Snacks', 'Beverages', 'Dairy', 'Personal Care', 'Household'],
  Offers:   ['Weekend Deals', 'Flash Deals', 'Combo Offers', 'Buy 1 Get 1', 'Coupon Zone'],
  Partners: ['Brand Collaborations', 'Flash Deals', 'Become a Partner'],
  About:    ['Our Story', 'Mission & Vision', 'Values', 'Careers'],
  Help:     ['Help Center', 'Track Order', 'Wishlist', 'Returns & Refunds', 'Contact Us'],
  Policies: ['Privacy Policy', 'Terms & Conditions', 'Refund & Cancellation', 'Delivery Policy', 'Cookie Policy'],
};
