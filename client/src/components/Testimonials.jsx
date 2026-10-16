import { useState, useEffect, useRef } from 'react'
import { testimonials } from '../data/data'
import './Testimonials.css'

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const go = (idx) => {
    const next = ((idx % testimonials.length) + testimonials.length) % testimonials.length;
    setActive(next);
    startTimer();
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  // Always show exactly 3 cards: prev, active, next
  const prev = ((active - 1) + testimonials.length) % testimonials.length;
  const next = (active + 1) % testimonials.length;
  const visible = [prev, active, next];

  const stars = (n) => Array(5).fill(0).map((_, i) => (
    <span key={i} className={`star ${i < n ? 'star-on' : 'star-off'}`}>★</span>
  ));

  return (
    <section className="testimonials-section">
      <div className="container">

        <div className="test-header">
          <h2 className="section-title">💬 What Our Customers Say</h2>
          <p className="test-sub">Real people. Real experiences.</p>
        </div>

        <div className="test-carousel">
          <button className="test-arrow" onClick={() => go(active - 1)}>‹</button>

          <div className="test-cards">
            {visible.map((tIdx, pos) => {
              const t = testimonials[tIdx];
              const isActive = pos === 1;
              return (
                <div
                  key={tIdx}
                  className={`test-card ${isActive ? 'is-active' : 'is-side'}`}
                  onClick={() => !isActive && go(tIdx)}
                >
                  <p className="test-text">"{t.review}"</p>
                  <div className="test-stars">{stars(t.rating)}</div>
                  <div className="test-author">
                    <div className="test-avatar">{t.avatar}</div>
                    <div>
                      <div className="test-name">{t.name}</div>
                      <div className="test-location">📍 {t.location}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="test-arrow" onClick={() => go(active + 1)}>›</button>
        </div>

        <div className="test-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`test-dot ${i === active ? 'active' : ''}`}
              onClick={() => go(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
