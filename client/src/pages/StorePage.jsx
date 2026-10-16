import { useState, useMemo } from 'react'
import { useCart } from '../context/CartContext'
import { products as allProducts, shopByNeed } from '../data/data'
import Footer from '../components/Footer'
import './StorePage.css'

/* ─── Extended product list for store ──────────────────────────────────────── */
const storeProducts = [
  ...allProducts,
  { id: 13, name: 'Fresh Apples (Red)',    category: 'fruits',        price: 149, mrp: 189, discount: 21, emoji: '🍎', bgColor: '#fff0f0', unit: '1 kg',  rating: 4.9, reviews: 134, isTrending: false, isFlashDeal: false },
  { id: 14, name: 'Britannia Bread',       category: 'bakery',        price: 35,  mrp: 42,  discount: 17, emoji: '🍞', bgColor: '#fff8e1', unit: '400g', rating: 4.5, reviews: 88,  isTrending: false, isFlashDeal: false },
  { id: 15, name: 'Maggi Noodles 70g',     category: 'snacks',        price: 16,  mrp: 16,  discount: 0,  emoji: '🍜', bgColor: '#fff3e0', unit: '70g',  rating: 4.6, reviews: 310, isTrending: true,  isFlashDeal: false },
  { id: 16, name: 'Tata Tea Gold 250g',    category: 'beverages',     price: 179, mrp: 215, discount: 17, emoji: '🍵', bgColor: '#efebe9', unit: '250g', rating: 4.8, reviews: 196, isTrending: false, isFlashDeal: false },
  { id: 17, name: 'Aashirvaad Atta 5kg',   category: 'groceries',     price: 199, mrp: 235, discount: 15, emoji: '🌾', bgColor: '#faf7f0', unit: '5kg',  rating: 4.7, reviews: 142, isTrending: false, isFlashDeal: false },
  { id: 18, name: 'Oreo Biscuits 120g',    category: 'snacks',        price: 40,  mrp: 50,  discount: 20, emoji: '🍪', bgColor: '#f3e5f5', unit: '120g', rating: 4.8, reviews: 220, isTrending: true,  isFlashDeal: false },
  { id: 19, name: 'Dettol Handwash 250ml', category: 'personal-care', price: 89,  mrp: 109, discount: 18, emoji: '🧼', bgColor: '#e0f7fa', unit: '250ml', rating: 4.6, reviews: 88, isTrending: false, isFlashDeal: true  },
  { id: 20, name: 'Fortune Sunflower Oil', category: 'groceries',     price: 155, mrp: 185, discount: 16, emoji: '🫙', bgColor: '#fff8e1', unit: '1L',   rating: 4.4, reviews: 66,  isTrending: false, isFlashDeal: false },
];

const storeCategories = [
  { name: 'Fruits & Vegetables', emoji: '🍎', color: '#fff0f0', count: 48 },
  { name: 'Dairy & Breakfast',   emoji: '🥛', color: '#f3e5f5', count: 35 },
  { name: 'Snacks & Munchies',   emoji: '🍿', color: '#fff8e1', count: 60 },
  { name: 'Beverages',           emoji: '🥤', color: '#e3f2fd', count: 28 },
  { name: 'Chocolates & Sweets', emoji: '🍫', color: '#fce4ec', count: 22 },
  { name: 'Bakery',              emoji: '🍞', color: '#fff3e0', count: 18 },
  { name: 'Atta, Rice & Staples',emoji: '🌾', color: '#f9fbe7', count: 30 },
  { name: 'Personal Care',       emoji: '🧴', color: '#e8eaf6', count: 45 },
  { name: 'Household Essentials',emoji: '🏠', color: '#e0f7fa', count: 38 },
  { name: 'Baby Care',           emoji: '👶', color: '#fff9c4', count: 24 },
  { name: 'Stationery & Others', emoji: '📝', color: '#f3f3f3', count: 16 },
];

const popularSearches = ['Milk', 'Bread', 'Eggs', 'Chips', 'Cold Drinks', 'Rice', 'Atta'];
const SORT_OPTIONS = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Discount', 'Rating'];
const BRANDS = ['Amul', 'Lay\'s', 'Coca-Cola', 'Nestlé', 'Tata'];

/* ─── Helpers ───────────────────────────────────────────────────────────────── */
function StarRow({ rating }) {
  return (
    <div className="sp-stars">
      {Array(5).fill(0).map((_, i) => (
        <span key={i} style={{ color: i < Math.round(rating) ? '#f5c518' : '#e0e0e0', fontSize: '.78rem' }}>★</span>
      ))}
      <span className="sp-rating-num">{rating}</span>
    </div>
  );
}

function StoreProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, isInCart, cartItems, updateQty } = useCart();
  const inWish = isInWishlist(product.id);
  const cartItem = cartItems.find(i => i.id === product.id);
  const qty = cartItem ? cartItem.qty : 0;

  return (
    <div className="sp-card">
      {product.discount > 0 && (
        <div className="sp-disc-badge">{product.discount}% OFF</div>
      )}
      {product.isTrending && <div className="sp-fresh-badge">🔥 Hot</div>}
      <button className={`sp-wish${inWish ? ' wished' : ''}`} onClick={() => toggleWishlist(product)}>
        {inWish ? '❤️' : '🤍'}
      </button>

      <div className="sp-img" style={{ background: product.bgColor }}>
        <span className="sp-emoji">{product.emoji}</span>
      </div>

      <div className="sp-body">
        <p className="sp-name">{product.name}</p>
        <p className="sp-unit">{product.unit}</p>
        <StarRow rating={product.rating} />
        <div className="sp-price-row">
          <span className="sp-price">₹{product.price}</span>
          {product.mrp > product.price && <span className="sp-mrp">₹{product.mrp}</span>}
        </div>

        {qty === 0 ? (
          <button className="sp-add-btn" onClick={() => addToCart(product)}>Add to Cart</button>
        ) : (
          <div className="sp-qty-row">
            <button className="sp-qty-btn" onClick={() => updateQty(product.id, qty - 1)}>−</button>
            <span className="sp-qty-num">{qty}</span>
            <button className="sp-qty-btn" onClick={() => updateQty(product.id, qty + 1)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main Store Page ───────────────────────────────────────────────────────── */
export default function StorePage() {
  const [search, setSearch] = useState('');
  const [activeCategories, setActiveCategories] = useState([]);
  const [sortBy, setSortBy] = useState('Recommended');
  const [priceMax, setPriceMax] = useState(500);
  const [discountOnly, setDiscountOnly] = useState(false);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [minRating, setMinRating] = useState(0);
  const [isPopped, setIsPopped] = useState(false);

  const triggerCartPop = () => {
    setIsPopped(true);
    setTimeout(() => setIsPopped(false), 700);
  };

  const toggleCategory = (name) => {
    setActiveCategories(prev =>
      prev.includes(name) ? prev.filter(c => c !== name) : [...prev, name]
    );
  };

  const clearFilters = () => {
    setActiveCategories([]); setPriceMax(500);
    setDiscountOnly(false); setInStockOnly(false); setMinRating(0);
    setSearch('');
  };

  const filteredProducts = useMemo(() => {
    let p = [...storeProducts];
    if (search)              p = p.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    if (activeCategories.length) p = p.filter(x => activeCategories.some(c => x.category.toLowerCase().includes(c.toLowerCase().split(' ')[0])));
    if (discountOnly)        p = p.filter(x => x.discount > 0);
    if (inStockOnly)         p = p.filter(x => x.inStock !== false);
    if (minRating > 0)       p = p.filter(x => x.rating >= minRating);
    p = p.filter(x => x.price <= priceMax);
    if (sortBy === 'Price: Low to High')  p.sort((a,b) => a.price - b.price);
    if (sortBy === 'Price: High to Low')  p.sort((a,b) => b.price - a.price);
    if (sortBy === 'Discount')            p.sort((a,b) => b.discount - a.discount);
    if (sortBy === 'Rating')              p.sort((a,b) => b.rating - a.rating);
    return p;
  }, [search, activeCategories, discountOnly, inStockOnly, minRating, priceMax, sortBy]);

  return (
    <div className="store-page" style={{ paddingTop: '106px' }}>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section 
        className="store-hero" 
        onClick={triggerCartPop}
        title="Click anywhere to pop the cart!"
      >
        <div className="container sh-inner">
          {/* Left: Content */}
          <div className="sh-left">
            <div className="sh-eyebrow">Everything You Need</div>
            <h1 className="sh-headline">All in One <em>Place.</em></h1>
            <p className="sh-desc">
              From everyday groceries to your favourite snacks, discover everything you
              need and get it delivered to your doorstep in as little as <strong>10 minutes.</strong>
            </p>
            <div className="sh-actions-wrap">
              <button 
                className="sh-cta" 
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('all-products')?.scrollIntoView({ behavior:'smooth' });
                }}
              >
                Start Shopping <span>→</span>
              </button>
              <div className="sh-badge-pill">⚡ 10 Min Delivery · 🌿 100% Fresh</div>
            </div>
          </div>

          {/* Right: Eye-Catching Floating Grocery Cart Graphic */}
          <div className="sh-visual-end">
            <div className={`sh-cart-scene ${isPopped ? 'is-popped' : ''}`}>
              {/* Radial ambient glow */}
              <div className="sh-cart-glow" />

              {/* Floating badges */}
              <div className="sh-badge-freshness">
                <span className="sh-badge-icon">🌿</span>
                <div>
                  <div className="sh-badge-title">100% Fresh</div>
                  <div className="sh-badge-sub">Farm-picked daily</div>
                </div>
              </div>

              <div className="sh-badge-speed">
                <span className="sh-badge-icon">⚡</span>
                <div>
                  <div className="sh-badge-title">10 Min</div>
                  <div className="sh-badge-sub">Ultra-fast delivery</div>
                </div>
              </div>

              {/* Cart Container with Overflowing Groceries */}
              <div className="sh-cart-container">
                {/* Pop particles that emerge on click */}
                {isPopped && (
                  <div className="sh-pop-burst">
                    <span className="sh-burst-item b1">✨</span>
                    <span className="sh-burst-item b2">🍓</span>
                    <span className="sh-burst-item b3">🥑</span>
                    <span className="sh-burst-item b4">⚡</span>
                    <span className="sh-burst-item b5">🌿</span>
                  </div>
                )}

                <div className="sh-cart-graphic">
                  {/* Layer of groceries inside and overflowing from the cart */}
                  <div className="cart-groceries-stack">
                    <span className="cg-item cg-bread" title="Baguette">🥖</span>
                    <span className="cg-item cg-milk" title="Fresh Milk">🥛</span>
                    <span className="cg-item cg-broccoli" title="Broccoli">🥦</span>
                    <span className="cg-item cg-apple" title="Red Apple">🍎</span>
                    <span className="cg-item cg-carrot" title="Carrot">🥕</span>
                    <span className="cg-item cg-juice" title="Juice">🧃</span>
                    <span className="cg-item cg-banana" title="Bananas">🍌</span>
                    <span className="cg-item cg-tomato" title="Vine Tomato">🍅</span>
                    <span className="cg-item cg-avocado" title="Avocado">🥑</span>
                    <span className="cg-item cg-chips" title="Snacks">🍿</span>
                    <span className="cg-item cg-grapes" title="Grapes">🍇</span>
                    <span className="cg-item cg-cheese" title="Cheese">🧀</span>
                  </div>

                  {/* Modern Shopping Cart SVG */}
                  <svg className="cart-svg-body" viewBox="0 0 320 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="cartFrame" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a5c38" />
                        <stop offset="50%" stopColor="#2e7d52" />
                        <stop offset="100%" stopColor="#0f3d25" />
                      </linearGradient>
                      <linearGradient id="cartHandleAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f5c518" />
                        <stop offset="100%" stopColor="#ffd84d" />
                      </linearGradient>
                      <filter id="cartShadowFilter" x="-15%" y="-15%" width="130%" height="130%">
                        <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#1a5c38" floodOpacity="0.25" />
                      </filter>
                    </defs>

                    {/* Cart Handle */}
                    <path d="M24 64 L62 64 L84 165" stroke="url(#cartFrame)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="14" y="56" width="46" height="16" rx="8" fill="#1a5c38" />
                    <rect x="20" y="60" width="34" height="8" rx="4" fill="url(#cartHandleAccent)" />

                    {/* Main Basket Lattice */}
                    <path 
                      d="M62 76 L286 76 L254 178 L96 178 Z" 
                      fill="rgba(240, 250, 244, 0.92)" 
                      stroke="url(#cartFrame)" 
                      strokeWidth="6" 
                      strokeLinejoin="round" 
                      filter="url(#cartShadowFilter)"
                    />

                    {/* Horizontal Basket Rungs */}
                    <path d="M68 102 L280 102" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.5" />
                    <path d="M76 128 L270 128" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.5" />
                    <path d="M84 154 L260 154" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.5" />

                    {/* Vertical Basket Rungs */}
                    <path d="M106 76 L118 178" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.4" />
                    <path d="M148 76 L152 178" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.4" />
                    <path d="M190 76 L188 178" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.4" />
                    <path d="M234 76 L224 178" stroke="#2e7d52" strokeWidth="2.5" strokeOpacity="0.4" />

                    {/* Undercarriage Frame */}
                    <path d="M84 165 L96 210 L234 210 L248 178" stroke="url(#cartFrame)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

                    {/* Wheel Assemblies */}
                    <circle cx="114" cy="225" r="14" fill="#1e293b" />
                    <circle cx="114" cy="225" r="6" fill="#e2e8f0" />
                    <circle cx="114" cy="225" r="3" fill="#1a5c38" />

                    <circle cx="224" cy="225" r="14" fill="#1e293b" />
                    <circle cx="224" cy="225" r="6" fill="#e2e8f0" />
                    <circle cx="224" cy="225" r="3" fill="#1a5c38" />
                  </svg>

                  {/* Cart Brand Badge */}
                  <div className="sh-cart-brand-tag">
                    <span className="sh-cbt-bolt">⚡</span>
                    <span className="sh-cbt-text">SPEEDY CART</span>
                  </div>
                </div>

                {/* Soft floor shadow */}
                <div className="sh-cart-floor-shadow" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Search ───────────────────────────────────────────────── */}
      <section className="store-search-section">
        <div className="container">
          <div className="ss-bar">
            <span className="ss-icon">🔍</span>
            <input
              className="ss-input"
              type="text"
              placeholder="Search for milk, chips, chocolates..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className="ss-btn">Search</button>
          </div>
          <div className="ss-row">
            <div className="ss-popular">
              <span className="ss-label">Popular Searches:</span>
              {popularSearches.map(s => (
                <button key={s} className="ss-chip" onClick={() => setSearch(s)}>{s}</button>
              ))}
            </div>
            <button className="ss-recent">Recent Searches ›</button>
          </div>
        </div>
      </section>

      {/* ── Shop by Category ─────────────────────────────────────── */}
      <section className="store-categories-section">
        <div className="container">
          <div className="section-row">
            <div>
              <h2 className="section-title">🛍️ Shop by Category</h2>
              <p className="sc-sub">Everything you need for everyday life, just a tap away.</p>
            </div>
            <button className="view-all-btn">Explore All Categories +</button>
          </div>
          <div className="sc-grid">
            {storeCategories.map(cat => (
              <button
                key={cat.name}
                className={`sc-card ${activeCategories.includes(cat.name) ? 'sc-active' : ''}`}
                onClick={() => toggleCategory(cat.name)}
              >
                <div className="sc-icon-wrap" style={{ background: cat.color }}>
                  <span className="sc-emoji">{cat.emoji}</span>
                </div>
                <span className="sc-name">{cat.name}</span>
                <span className="sc-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Deals Banner ─────────────────────────────────────────── */}
      <section className="store-deals-banner">
        <div className="container">
          <div className="sdb-grid">
            {/* Weekend deals */}
            <div className="sdb-card sdb-green">
              <div className="sdb-content">
                <div className="sdb-eyebrow">⏰ Limited Time Only</div>
                <h3 className="sdb-title">Your Weekend<br/>Just Got Better!</h3>
                <p className="sdb-desc">Stock up on your favourites without stretching your budget. Discover exciting discounts, special combos and limited-time weekend deals.</p>
                <button className="sdb-btn sdb-btn-light">Explore Weekend Deals →</button>
              </div>
              <div className="sdb-right">
                <div className="sdb-off-badge">
                  <span>UP TO</span>
                  <strong>50%</strong>
                  <span>OFF</span>
                </div>
                <div className="sdb-products">
                  {['🥤','🍟','🍕','🥛'].map((e,i) => (
                    <span key={i} className="sdb-product-item" style={{animationDelay:`${i*.2}s`}}>{e}</span>
                  ))}
                </div>
                <div className="sdb-valid">📅 Valid Till 27 Apr – 30 Apr</div>
              </div>
            </div>

            {/* Great Products */}
            <div className="sdb-card sdb-white">
              <div className="sdb-deal-badge">DEAL</div>
              <div className="sdb-content">
                <h3 className="sdb-title sdb-dark-title">Great Products.<br/>Even Better Prices.</h3>
                <p className="sdb-desc sdb-dark-desc">Your favourite essentials at prices you'll love.</p>
                <button className="sdb-btn sdb-btn-green">Shop All Deals →</button>
              </div>
              <div className="sdb-products sdb-right-products">
                {['🧴','🥛','🧺','🍫'].map((e,i) => (
                  <span key={i} className="sdb-product-item" style={{animationDelay:`${i*.2}s`,fontSize:'2.4rem'}}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shop by Need ─────────────────────────────────────────── */}
      <section className="store-sbn-section">
        <div className="container">
          <div className="section-row">
            <h2 className="section-title">🎯 What Are You Shopping For?</h2>
            <button className="view-all-btn">View All Collections →</button>
          </div>
          <p className="sbn-sub">Whatever the occasion, Speedy has your essentials covered.</p>
          <div className="sbn-scroll">
            {shopByNeed.map(item => (
              <button key={item.id} className="sbn-tile" style={{background: item.bgGrad}}>
                <span className="sbn-tile-emoji">{item.emoji}</span>
                <div className="sbn-tile-info">
                  <span className="sbn-tile-name">{item.name}</span>
                  <span className="sbn-tile-link" style={{color: item.color}}>Shop {item.name.split(' ')[0]} →</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── All Products ─────────────────────────────────────────── */}
      <section className="store-products-section" id="all-products">
        <div className="container">
          <div className="sp-layout">

            {/* Sidebar */}
            <aside className="sp-sidebar">
              <div className="sp-sidebar-head">
                <span className="sp-sidebar-title">🎛️ Filters & Sorting</span>
              </div>

              {/* Category */}
              <div className="sp-filter-group">
                <div className="sp-filter-label">Category</div>
                {[
                  ['Fruits & Vegetables', 48],
                  ['Snacks', 60],
                  ['Dairy', 35],
                  ['Beverages', 28],
                  ['Household', 38],
                  ['Personal Care', 45],
                ].map(([cat, count]) => (
                  <label key={cat} className="sp-check-row">
                    <input
                      type="checkbox"
                      checked={activeCategories.includes(cat)}
                      onChange={() => toggleCategory(cat)}
                    />
                    <span className="sp-check-name">{cat}</span>
                    <span className="sp-check-count">({count})</span>
                  </label>
                ))}
                <button className="sp-show-more">+ Show More</button>
              </div>

              {/* Price Range */}
              <div className="sp-filter-group">
                <div className="sp-filter-label">Price Range</div>
                <div className="sp-price-range">
                  <span>₹0</span>
                  <input
                    type="range" min={0} max={500} value={priceMax}
                    onChange={e => setPriceMax(+e.target.value)}
                    className="sp-slider"
                  />
                  <span>₹{priceMax}</span>
                </div>
              </div>

              {/* Brand */}
              <div className="sp-filter-group">
                <div className="sp-filter-label">Brand</div>
                {BRANDS.map(b => (
                  <label key={b} className="sp-check-row">
                    <input type="checkbox" />
                    <span className="sp-check-name">{b}</span>
                  </label>
                ))}
              </div>

              {/* Discount */}
              <div className="sp-filter-group">
                <div className="sp-filter-label">Discount</div>
                <label className="sp-check-row">
                  <input type="checkbox" checked={discountOnly} onChange={e => setDiscountOnly(e.target.checked)} />
                  <span className="sp-check-name">On Discount Only</span>
                </label>
              </div>

              {/* Rating */}
              <div className="sp-filter-group">
                <div className="sp-filter-label">Rating</div>
                {[4, 3, 0].map(r => (
                  <label key={r} className="sp-check-row">
                    <input type="radio" name="rating" checked={minRating === r} onChange={() => setMinRating(r)} />
                    <span className="sp-check-name">{r > 0 ? `${r}★ & Above` : 'All'}</span>
                  </label>
                ))}
              </div>

              {/* Availability */}
              <div className="sp-filter-group">
                <div className="sp-filter-label">Availability</div>
                <label className="sp-check-row">
                  <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} />
                  <span className="sp-check-name">In Stock Only</span>
                </label>
              </div>

              <div className="sp-filter-actions">
                <button className="sp-apply-btn">Apply Filters</button>
                <button className="sp-clear-btn" onClick={clearFilters}>Clear All</button>
              </div>
            </aside>

            {/* Product Area */}
            <div className="sp-main">
              <div className="sp-main-header">
                <h2 className="sp-main-title">🛒 All Products</h2>
                <p className="sp-main-sub">Explore All Products — Find everything you need, all in one place.</p>
                <div className="sp-main-controls">
                  <span className="sp-count">Showing 1–{filteredProducts.length} of {filteredProducts.length} products</span>
                  <div className="sp-sort">
                    <label>Sort By:</label>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="sp-sort-select">
                      {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="sp-empty">
                  <span>🔍</span>
                  <p>No products found. Try adjusting your filters.</p>
                  <button className="sp-clear-btn" onClick={clearFilters}>Clear Filters</button>
                </div>
              ) : (
                <div className="sp-grid">
                  {filteredProducts.map((p, i) => (
                    <div key={p.id} style={{ animationDelay: `${i * .04}s` }}>
                      <StoreProductCard product={p} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA Banner ────────────────────────────────────── */}
      <section className="store-cta-banner">
        <div className="container">
          <div className="scta-inner">
            <div className="scta-rider">🛵</div>
            <div className="scta-content">
              <h3 className="scta-title">Need It? <em>Speedy It.</em></h3>
              <p className="scta-desc">Find what you need and get it delivered in as little as 10 minutes.</p>
              <button
                className="scta-btn"
                onClick={() => document.getElementById('all-products').scrollIntoView({ behavior:'smooth' })}
              >
                Start Shopping Now →
              </button>
            </div>
            <div className="scta-badge">
              <span className="scta-badge-icon">⚡</span>
              <div>
                <div className="scta-badge-num">10 MIN</div>
                <div className="scta-badge-sub">DELIVERY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
