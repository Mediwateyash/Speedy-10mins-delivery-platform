import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './AboutPage.css'

export default function AboutPage() {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'Super convenient shopping and a great selection of products. Speedy makes getting everyday essentials so much easier!'
    },
    {
      id: 2,
      name: 'Rohit Mehta',
      location: 'Thane',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'The weekend offers are amazing! I can find my favourite snacks and essentials at great prices.'
    },
    {
      id: 3,
      name: 'Sneha Patel',
      location: 'Navi Mumbai',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'I love the variety of products and the convenience of shopping from home. It makes my daily routine easier!'
    },
    {
      id: 4,
      name: 'Aditya Verma',
      location: 'Andheri',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      text: 'The 10-minute promise is real! Always on time, fresh vegetables and dairy every single morning.'
    }
  ];

  const nextReview = () => {
    setActiveReviewIdx((prev) => (prev + 1) % (reviews.length - 2));
  };

  const prevReview = () => {
    setActiveReviewIdx((prev) => (prev - 1 + (reviews.length - 2)) % (reviews.length - 2));
  };

  return (
    <div className="about-page" style={{ paddingTop: '106px' }}>

      {/* ── 1. Hero Section ────────────────────────────────────────── */}
      <section className="about-hero">
        <div className="container about-hero-inner">
          {/* Left Text */}
          <div className="about-hero-content">
            <span className="about-pill">About Us</span>
            <h1 className="about-hero-title">
              Meet Speedy.<br />
              <span className="about-title-dark">Your Everyday, Made Easier.</span>
            </h1>
            <p className="about-hero-desc">
              From daily essentials to exciting deals, Speedy makes everyday shopping faster,
              simpler, and more convenient.
            </p>
            <p className="about-hero-tagline">Need it? Speedy it.</p>
            <Link to="/store" className="about-cta-btn">
              Start Shopping <span className="btn-arrow">→</span>
            </Link>
          </div>

          {/* Right Image */}
          <div className="about-hero-visual">
            <div className="about-hero-img-card">
              <img
                src="/about-hero.jpg"
                alt="Speedy Delivery Bag filled with fresh groceries"
                className="about-hero-img"
              />

              {/* 10 Min Delivery Dark Badge */}
              <div className="about-float-badge-dark">
                <span className="afb-icon">⏱️</span>
                <div>
                  <div className="afb-title">10 MIN</div>
                  <div className="afb-sub">DELIVERY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Our Story Section ──────────────────────────────────── */}
      <section className="about-story-section">
        <div className="container about-story-inner">
          {/* Left Image with playful sticker */}
          <div className="about-story-media">
            <div className="about-story-img-card">
              <img
                src="/about-story.jpg"
                alt="Happy customer with Speedy grocery bag"
                className="about-story-img"
              />
              {/* Floating Sticker Left */}
              <div className="about-sticker sticker-goodfood">
                <span className="sticker-txt">Good Food<br />Better Days</span>
                <span className="sticker-smile">◡̈</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="about-story-content">
            <div className="story-header-row">
              <span className="about-pill">Our Story</span>
              {/* Floating Sticker Right */}
              <div className="about-sticker sticker-choices">
                <span className="sticker-txt">Better Choices<br />Faster Days</span>
                <span className="sticker-smile">◡̈</span>
              </div>
            </div>

            <h2 className="about-section-heading">
              Making Everyday Shopping Effortless
            </h2>

            <p className="about-story-text">
              At Speedy, we believe getting your everyday essentials should be quick, easy,
              and hassle-free. From groceries, snacks to beverages and household products, we bring
              your daily needs closer to you with a convenient shopping experience.
            </p>

            <p className="about-story-text">
              With a focus on speed, value and variety, Speedy helps you spend less time
              shopping and more time doing what you love.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. Why Choose Speedy? ─────────────────────────────────── */}
      <section className="about-why-section">
        <div className="container">
          <div className="about-why-card">
            <div className="why-header">
              <span className="about-pill pill-subtle">Why Choose Speedy?</span>
              <h2 className="about-section-heading">More Than Fast. It's Speedy.</h2>
            </div>

            <div className="why-grid">
              {/* Feature 1 */}
              <div className="why-item">
                <div className="why-icon-wrap">
                  <span className="why-icon">⚡</span>
                </div>
                <h3 className="why-item-title">Quick Delivery</h3>
                <p className="why-item-desc">
                  Get your essentials delivered in as little as 10 minutes where available.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="why-item">
                <div className="why-icon-wrap">
                  <span className="why-icon">🧺</span>
                </div>
                <h3 className="why-item-title">Everyday Essentials</h3>
                <p className="why-item-desc">
                  Find groceries, snacks, beverages, and household products in one place.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="why-item">
                <div className="why-icon-wrap">
                  <span className="why-icon">%</span>
                </div>
                <h3 className="why-item-title">Exciting Offers</h3>
                <p className="why-item-desc">
                  Enjoy weekend deals, special discounts, and combo offers.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="why-item">
                <div className="why-icon-wrap">
                  <span className="why-icon">✨</span>
                </div>
                <h3 className="why-item-title">Fresh Discoveries</h3>
                <p className="why-item-desc">
                  Explore new products, trending brands, and limited-time deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. By the Numbers ─────────────────────────────────────── */}
      <section className="about-numbers-section">
        <div className="container">
          <div className="about-numbers-card">
            <div className="numbers-header">
              <span className="about-pill pill-yellow">By the Numbers</span>
              <h2 className="about-section-heading">Small Waits. Big Numbers.</h2>
            </div>

            <div className="numbers-grid">
              {/* Stat 1 */}
              <div className="number-stat-item">
                <div className="num-icon-wrap">
                  <span className="num-icon">🏪</span>
                  <span className="num-radiant r-left">/</span>
                  <span className="num-radiant r-right">\</span>
                </div>
                <div className="num-value">500+</div>
                <div className="num-label">Stores</div>
              </div>

              {/* Stat 2 */}
              <div className="number-stat-item">
                <div className="num-icon-wrap">
                  <span className="num-icon">🛵</span>
                  <span className="num-radiant r-left">/</span>
                  <span className="num-radiant r-right">\</span>
                </div>
                <div className="num-value">3,000+</div>
                <div className="num-label">Delivery Partners</div>
              </div>

              {/* Stat 3 */}
              <div className="number-stat-item">
                <div className="num-icon-wrap">
                  <span className="num-icon">👥</span>
                  <span className="num-radiant r-left">/</span>
                  <span className="num-radiant r-right">\</span>
                </div>
                <div className="num-value">1 Lakh+</div>
                <div className="num-label">Satisfied Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Loved by Our Customers ─────────────────────────────── */}
      <section className="about-reviews-section">
        <div className="container">
          <div className="reviews-header-wrap">
            <div>
              <span className="about-pill">Customer Love</span>
              <h2 className="about-section-heading">Loved by Our Customers</h2>
              <p className="reviews-sub">
                Real people. Real experiences. That's what keeps us going.
              </p>
            </div>

            {/* Arrows */}
            <div className="reviews-nav-arrows">
              <button 
                className="rev-arrow-btn" 
                onClick={prevReview} 
                aria-label="Previous review"
              >
                ‹
              </button>
              <button 
                className="rev-arrow-btn" 
                onClick={nextReview} 
                aria-label="Next review"
              >
                ›
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="reviews-cards-grid">
            {reviews.slice(activeReviewIdx, activeReviewIdx + 3).map((r) => (
              <div key={r.id} className="about-review-card">
                <div className="rev-user-row">
                  <img src={r.avatar} alt={r.name} className="rev-avatar" />
                  <div className="rev-meta">
                    <h4 className="rev-name">{r.name}</h4>
                    <span className="rev-loc">{r.location}</span>
                    <div className="rev-stars">
                      {'★'.repeat(r.rating)}
                    </div>
                  </div>
                </div>
                <p className="rev-quote">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Life Moves Fast. Shop Speedy. (CTA Banner) ─────────── */}
      <section className="about-bottom-cta-section">
        <div className="container">
          <div className="about-bottom-cta-card">
            {/* Left CTA text */}
            <div className="ab-cta-left">
              <h2 className="ab-cta-heading">
                <span className="ab-cta-bolt">⚡</span> Life Moves Fast.<br />Shop Speedy.
              </h2>
              <p className="ab-cta-desc">
                Your everyday essentials are just a few clicks away.<br />
                Shop your favourites and discover a faster way to meet your daily needs.
              </p>
              <Link to="/store" className="about-cta-btn ab-cta-yellow">
                Start Shopping <span className="btn-arrow">→</span>
              </Link>
            </div>

            {/* Right CTA image */}
            <div className="ab-cta-right">
              <div className="ab-cta-img-wrap">
                <img
                  src="/about-cta.jpg"
                  alt="Speedy mobile app and groceries"
                  className="ab-cta-img"
                />
                <div className="ab-cta-sticker">
                  More Choices<br />Less Waiting<br />
                  <span className="sticker-smile">◡̈</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Footer ────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
