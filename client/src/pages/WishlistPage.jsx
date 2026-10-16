import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Footer from '../components/Footer'
import './WishlistPage.css'

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, isInCart, cartItems, updateQty } = useCart();
  const [activeTab, setActiveTab] = useState('All Items');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Derive categories and their live counts from the current wishlist
  const categoryCounts = useMemo(() => {
    const counts = { 'All Items': wishlist.length };
    wishlist.forEach((item) => {
      const cat = item.category || 'Groceries';
      counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [wishlist]);

  const categories = useMemo(() => {
    const defaultTabs = ['All Items', 'Groceries', 'Snacks', 'Beverages', 'Personal Care', 'Household'];
    const dynamicTabs = Object.keys(categoryCounts).filter(k => k !== 'All Items');
    return Array.from(new Set([...defaultTabs, ...dynamicTabs]));
  }, [categoryCounts]);

  // Filter products by selected category
  const filteredItems = useMemo(() => {
    if (activeTab === 'All Items') return wishlist;
    return wishlist.filter(item => (item.category || '').toLowerCase() === activeTab.toLowerCase());
  }, [wishlist, activeTab]);

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredItems.slice(start, start + itemsPerPage);
  }, [filteredItems, currentPage]);

  const getItemQty = (id) => {
    const found = cartItems.find(i => i.id === id);
    return found ? found.qty : 0;
  };

  return (
    <div className="wishlist-page" style={{ paddingTop: '106px' }}>
      <div className="container wishlist-container">

        {/* ── Page Header ────────────────────────────────────────────── */}
        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <p className="wishlist-subtitle">Your favourite items, all in one place.</p>
        </div>

        {/* ── Category Filter Pills ─────────────────────────────────── */}
        <div className="wishlist-tabs-wrap">
          <div className="wishlist-tabs">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0;
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  className={`wishlist-tab-btn ${isActive ? 'tab-active' : ''}`}
                  onClick={() => {
                    setActiveTab(cat);
                    setCurrentPage(1);
                  }}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Product Cards Grid ────────────────────────────────────── */}
        {filteredItems.length === 0 ? (
          <div className="wishlist-empty-card">
            <span className="empty-heart-icon">❤️</span>
            <h3 className="empty-title">Your wishlist is empty</h3>
            <p className="empty-desc">
              {activeTab === 'All Items'
                ? "You haven't saved any items yet. Explore our store to add your favourites!"
                : `No items found under ${activeTab}. Explore more products from our catalogue!`}
            </p>
            <Link to="/store" className="wishlist-explore-btn">
              Explore Store →
            </Link>
          </div>
        ) : (
          <>
            <div className="wishlist-grid">
              {paginatedItems.map((item) => {
                const inCart = isInCart(item.id);
                const qty = getItemQty(item.id);

                return (
                  <div key={item.id} className="w-card">
                    {/* Heart button (Wishlist toggle) */}
                    <button
                      className="w-heart-btn"
                      onClick={() => toggleWishlist(item)}
                      title="Remove from wishlist"
                    >
                      <span className="w-red-heart">❤️</span>
                    </button>

                    {/* Image / Product Visual */}
                    <div className="w-img-wrap">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-product-img"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <span
                        className="w-product-emoji"
                        style={{ display: item.image ? 'none' : 'block' }}
                      >
                        {item.emoji || '🛍️'}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="w-card-body">
                      <h3 className="w-item-name">{item.name}</h3>
                      <span className="w-item-unit">{item.unit || '1 pc'}</span>

                      {/* Price, MRP, Discount */}
                      <div className="w-price-row">
                        <span className="w-price">₹{item.price}</span>
                        {item.mrp && item.mrp > item.price && (
                          <span className="w-mrp">₹{item.mrp}</span>
                        )}
                        {item.discount > 0 && (
                          <span className="w-discount-pill">{item.discount}% OFF</span>
                        )}
                      </div>

                      {/* Rating */}
                      <div className="w-rating-row">
                        <span className="w-star">★</span>
                        <span className="w-rating-val">{item.rating || 4.5}</span>
                        <span className="w-reviews-count">({item.reviewsCount || `${item.reviews || 100}`})</span>
                      </div>

                      {/* Action: Add to Cart / Qty controls */}
                      {inCart ? (
                        <div className="w-qty-controls">
                          <button
                            className="w-qty-btn"
                            onClick={() => updateQty(item.id, qty - 1)}
                          >
                            −
                          </button>
                          <span className="w-qty-num">{qty} in cart</span>
                          <button
                            className="w-qty-btn"
                            onClick={() => updateQty(item.id, qty + 1)}
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          className="w-add-btn"
                          onClick={() => addToCart(item)}
                        >
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* ── Pagination ────────────────────────────────────────── */}
            {totalPages > 1 && (
              <div className="wishlist-pagination">
                <button
                  className="w-page-btn"
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    className={`w-page-btn ${currentPage === num ? 'page-active' : ''}`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ))}
                <button
                  className="w-page-btn"
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
