import { useState, useEffect } from 'react'
import './DealsSection.css'

function getTimeLeft() {
  const now  = new Date();
  const end  = new Date();
  end.setHours(23, 59, 59, 999);
  const diff = end - now;
  return {
    h: String(Math.floor(diff / 3_600_000)).padStart(2,'0'),
    m: String(Math.floor((diff % 3_600_000) / 60_000)).padStart(2,'0'),
    s: String(Math.floor((diff % 60_000) / 1_000)).padStart(2,'0'),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div className="countdown-unit">
      <div className="countdown-num">{value}</div>
      <div className="countdown-lbl">{label}</div>
    </div>
  );
}

export default function DealsSection() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="deals-section">
      <div className="container">
        <div className="deals-grid">

          {/* ── Weekend Deals ──────────────────────────────── */}
          <div className="deal-card deal-weekend">
            <div className="deal-content">
              <div className="deal-badge">Weekend Deals</div>
              <div className="deal-off-badge">
                <span>UP TO</span>
                <strong>50%</strong>
                <span>OFF</span>
              </div>
              <p className="deal-tagline">More Deals. More Savings.</p>
              <button className="deal-btn deal-btn-light">
                Shop Deals <span>→</span>
              </button>
            </div>
            <div className="deal-emojis">
              <span className="de-1">🛍️</span>
              <span className="de-2">🛒</span>
              <span className="de-3">💰</span>
            </div>
          </div>

          {/* ── Flash Deals ────────────────────────────────── */}
          <div className="deal-card deal-flash">
            <div className="deal-content">
              <div className="flash-header">
                <span className="flash-icon">⚡</span>
                <span className="flash-title">Flash Deals</span>
              </div>
              <p className="flash-sub">Limited time. Top offers.</p>

              <div className="countdown-row">
                <CountdownUnit value={time.h} label="Hrs"  />
                <span className="count-sep">:</span>
                <CountdownUnit value={time.m} label="Mins" />
                <span className="count-sep">:</span>
                <CountdownUnit value={time.s} label="Sec"  />
              </div>

              <button className="deal-btn deal-btn-dark">
                Shop Now <span>→</span>
              </button>
            </div>
            <div className="deal-emojis flash-emojis">
              <span>🥤</span><span>🍟</span><span>🍕</span>
            </div>
          </div>

          {/* ── Exclusive Deals ────────────────────────────── */}
          <div className="deal-card deal-exclusive">
            <div className="deal-content">
              <div className="exclusive-badge">Exclusive Deals</div>
              <p className="exclusive-sub">Great products. Better prices.</p>
              <div className="exclusive-tag">LIMITED TIME</div>
              <button className="deal-btn deal-btn-green">
                Shop Now <span>→</span>
              </button>
            </div>
            <div className="deal-emojis excl-emojis">
              <span>🧴</span><span>🥛</span><span>🧺</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
