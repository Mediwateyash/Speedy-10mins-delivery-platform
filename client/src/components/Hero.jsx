import { useState } from 'react'
import './Hero.css'

function PlayStoreSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
      <defs>
        <linearGradient id="hps1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00b4ff"/><stop offset="100%" stopColor="#0070ff"/></linearGradient>
        <linearGradient id="hps2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#ff3a44"/><stop offset="100%" stopColor="#c31162"/></linearGradient>
        <linearGradient id="hps3" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#32a071"/><stop offset="100%" stopColor="#00f076"/></linearGradient>
        <linearGradient id="hps4" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#ffd200"/><stop offset="100%" stopColor="#ff8a00"/></linearGradient>
      </defs>
      <path d="M35.5 3.7C23.4 10.5 15 23.5 15 40v432c0 16.5 8.4 29.5 20.5 36.3l2.2 1.2 241.8-241.8v-5.7L37.7 20.5z" fill="url(#hps1)"/>
      <path d="M336.9 222.5l-80.6-80.7v-5.7l80.6-80.6 1.8 1 95.5 54.2c27.3 15.5 27.3 40.9 0 56.4l-95.5 54.2z" fill="url(#hps4)"/>
      <path d="M338.7 221.3L256 138.6 35.5 359.1c9 9.5 23.8 10.7 40.5 1.2z" fill="url(#hps2)"/>
      <path d="M338.7 56.7L76 195.7c-16.7 9.5-31.5 8.3-40.5-1.2L256 173.4z" fill="url(#hps3)"/>
    </svg>
  );
}

function AppStoreSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg" style={{flexShrink:0}}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-157.2-122.1C148 537 125 347 125 263.2c0-30.2 7.2-59.2 20.2-85.5 27.5-53.2 79.4-88.6 136-90.5 40.6-1.4 80.9 24.6 105.2 24.6 24.5 0 70.7-30.9 122.7-30.9 24.4 0 108.5 1.9 162.8 73.2zm-166.2-162.7c12.3-17.2 20.8-40.3 20.8-63.4 0-32.6-16.8-67.1-43.8-89.1-21.9-18.4-52.7-32.1-82.3-32.1-5.4 0-10.7.3-15.6 1-11.5 1.4-24.5 9.4-35.3 18.7-13.3 11.3-24 28.1-24 51.1 0 33.2 15.3 65.2 43.6 88.2 21.9 17.7 50.7 28.5 78.4 28.5z" fill="white"/>
    </svg>
  );
}

export default function Hero() {
  const [location, setLocation] = useState('');

  return (
    <section className="hero">
      <div className="hero-inner container">
        {/* ── Left Content ─────────────────────────────────── */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="badge-icon">⚡</span>
            Home Delivery in 1 Minutes
          </div>

          <h1 className="hero-headline animate-fade-up" style={{ animationDelay: '.1s' }}>
            Everything You Need.<br />
            Delivered in{' '}
            <span className="hero-highlight">10 Minutes.</span>
          </h1>

          <p className="hero-sub animate-fade-up" style={{ animationDelay: '.2s' }}>
            Groceries, snacks, beverages, household essentials,
            personal care and more — all at your doorstep.
          </p>

          <div className="hero-input-wrap animate-fade-up" style={{ animationDelay: '.3s' }}>
            <span className="input-icon">📍</span>
            <input
              type="text"
              placeholder="Enter your delivery location"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="location-input"
            />
            <button className="shop-now-btn">
              Shop Now <span>›</span>
            </button>
          </div>

          <div className="hero-apps animate-fade-up" style={{ animationDelay: '.4s' }}>
            <span className="apps-label">Get the Speedy App</span>
            <div className="app-badges">
              <a href="#" className="app-badge">
                <PlayStoreSVG />
                <div>
                  <span className="app-badge-sub">GET IT ON</span>
                  <span className="app-badge-main">Google Play</span>
                </div>
              </a>
              <a href="#" className="app-badge">
                <AppStoreSVG />
                <div>
                  <span className="app-badge-sub">Download on the</span>
                  <span className="app-badge-main">App Store</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* ── Right Visual ─────────────────────────────────── */}
        <div className="hero-visual animate-slide-left">

          {/* Floating info badge — top-left of visual area */}
          <div className="hero-badge-float animate-float" style={{ top: '4%', left: '2%', animationDelay: '.3s' }}>
            <div className="hbf-line">🌿 Fresh Products</div>
            <div className="hbf-line">⚡ Fast Delivery</div>
            <div className="hbf-line">😊 Happy You!</div>
          </div>

          {/* Central delivery bag — bigger */}
          <div className="hero-bag">
            <div className="bag-body">
              <div className="bag-logo">
                <span className="bag-logo-icon">⚡</span>
                <div>
                  <div className="bag-logo-name">Speedy</div>
                  <div className="bag-logo-sub">10 MIN DELIVERY</div>
                </div>
              </div>
              <div className="bag-items">
                {['🥛','🍎','🥦','🍕','🥤','🌽','🧀','🍌'].map((e,i) => (
                  <span key={i} className="bag-item" style={{ animationDelay: `${i * .12}s` }}>{e}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockup — right side, no overlap */}
          <div className="hero-phone animate-float" style={{ animationDelay: '.6s' }}>
            <div className="phone-screen">
              <div className="phone-header">
                <span className="ph-icon">⚡</span>
                <span className="ph-name">Speedy</span>
              </div>
              <div className="phone-banner">Delivered in<br/><strong>10 Minutes</strong></div>
              <div className="phone-items">
                {['🥛','🍌','🥤'].map((e,i) => (
                  <div key={i} className="phone-item">{e}</div>
                ))}
              </div>
              <div className="phone-delivery">
                <span>🛵</span>
                <span>On the way!</span>
              </div>
            </div>
          </div>

          {/* Floating produce — fixed positions, well-spaced, no overlap */}
          {[
            { emoji: '🍅', top: '8%',  left: '10%', size: '2rem',   delay: '0s'   },
            { emoji: '🥕', top: '78%', left: '8%',  size: '2.2rem', delay: '.5s'  },
            { emoji: '🍋', top: '10%', left: '82%', size: '2rem',   delay: '1s'   },
            { emoji: '🌽', top: '72%', left: '78%', size: '2.2rem', delay: '.8s'  },
            { emoji: '🥦', top: '42%', left: '5%',  size: '1.9rem', delay: '.4s'  },
          ].map(({ emoji, top, left, size, delay }, i) => (
            <span
              key={i}
              className="produce-float animate-float"
              style={{ top, left, fontSize: size, animationDelay: delay }}
            >{emoji}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
