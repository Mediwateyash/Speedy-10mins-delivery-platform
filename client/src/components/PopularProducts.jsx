import { useState } from 'react'
import { products } from '../data/data'
import ProductCard from './ProductCard'
import './PopularProducts.css'

const FILTERS = ['All', 'Groceries', 'Snacks', 'Beverages', 'Dairy', 'Personal Care', 'Household'];

export default function PopularProducts() {
  const [activeFilter, setActiveFilter] = useState('All');

  const trending = products.filter(p =>
    p.isTrending &&
    (activeFilter === 'All' || p.category.toLowerCase() === activeFilter.toLowerCase())
  );

  return (
    <section className="popular-section">
      <div className="container">
        {/* Header */}
        <div className="section-row">
          <h2 className="section-title">
            🔥 Popular / Trending Products
          </h2>
          <button className="view-all-btn">View All →</button>
        </div>

        {/* Filters */}
        <div className="filters-row">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-chip${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {trending.map((product, i) => (
            <div key={product.id} style={{ animationDelay: `${i * .07}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
