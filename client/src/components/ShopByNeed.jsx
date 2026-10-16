import { shopByNeed } from '../data/data'
import './ShopByNeed.css'

export default function ShopByNeed() {
  return (
    <section className="sbn-section">
      <div className="container">
        <div className="section-row">
          <h2 className="section-title">🛍️ Shop by Need</h2>
          <button className="view-all-btn">View All →</button>
        </div>

        <div className="sbn-grid">
          {shopByNeed.map((item, i) => (
            <button
              key={item.id}
              className="sbn-card"
              style={{ animationDelay: `${i * .08}s`, background: item.bgGrad }}
            >
              <div className="sbn-emoji" style={{ color: item.color }}>{item.emoji}</div>
              <div className="sbn-info">
                <span className="sbn-name">{item.name}</span>
                <span className="sbn-sub">{item.subtitle}</span>
              </div>
              <div className="sbn-arrow" style={{ color: item.color }}>›</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
