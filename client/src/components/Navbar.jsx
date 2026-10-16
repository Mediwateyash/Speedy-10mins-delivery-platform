import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import './Navbar.css'

export default function Navbar() {
  const { cartCount, setIsCartOpen, wishlist } = useCart();
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [searchVal, setSearchVal] = useState('');
  const location = useLocation();
  const isStore = location.pathname === '/store';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Global clean nav links: Shop, About, Help (Offers and Partners removed)
  const navLinks = [
    { label: 'Shop', to: '/store' },
    { label: 'About', to: '/about' },
    { label: 'Help', to: '#help' },
  ];

  return (
    <>
      {/* ── Top Banner ─────────────────────────────────────── */}
      <div className="top-banner">
        <div className="top-banner-left">
          <span className="top-banner-icon">⚡</span>
          <span><strong>10-Minute Delivery</strong> • Weekend Deals Live Now</span>
        </div>
        <button className="top-banner-right">
          Save More, Shop More! <span className="banner-arrow">›</span>
        </button>
      </div>

      {/* ── Main Navbar ─────────────────────────────────────── */}
      <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        <div className="nav-inner container">

          {/* Logo */}
          <NavLink to="/" className="nav-logo">
            <div className="logo-icon">⚡</div>
            <div className="logo-text">
              <span className="logo-name">Speedy</span>
              <span className="logo-sub">Home Delivery in 10 Minutes</span>
            </div>
          </NavLink>

          {/* Links */}
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            {navLinks.map(({ label, to }) => (
              <li key={label}>
                {to.startsWith('/') ? (
                  <NavLink
                    to={to}
                    className={({ isActive }) => `nav-link${isActive ? ' nav-link-active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </NavLink>
                ) : (
                  <a href={to} className="nav-link">{label}</a>
                )}
              </li>
            ))}
          </ul>

          {/* Right Controls */}
          <div className="nav-right">
            {/* Location */}
            <button className="location-btn">
              <span className="loc-icon">📍</span>
              <span className="loc-text">Mumbai</span>
              <span className="loc-arrow">▼</span>
            </button>

            {/* Search */}
            <div className="search-wrap">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search for products..."
                value={searchVal}
                onChange={e => setSearchVal(e.target.value)}
                className="search-input"
              />
            </div>

            {/* Wishlist Link with Red Heart */}
            <NavLink to="/wishlist" className="icon-btn wishlist-nav-btn" title="Wishlist">
              <span className="wishlist-heart-icon">❤️</span>
              {wishlist && wishlist.length > 0 && <span className="wishlist-badge">{wishlist.length}</span>}
            </NavLink>
            <button className="icon-btn" title="Account"><span>👤</span></button>
            <button className="cart-btn" onClick={() => setIsCartOpen(true)} title="Cart">
              <span>🛒</span>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMenuOpen(v => !v)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </>
  );
}
