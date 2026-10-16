import { useRef } from 'react'
import { categories } from '../data/data'
import './Categories.css'

export default function Categories() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' });
  };

  return (
    <section className="categories-section">
      <div className="container">
        <div className="categories-wrapper">
          <button className="cat-arrow cat-arrow-left"  onClick={() => scroll(-1)}>‹</button>
          <div className="categories-scroll" ref={scrollRef}>
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                className="cat-card"
                style={{ animationDelay: `${i * .05}s` }}
              >
                <div
                  className="cat-icon-wrap"
                  style={{ background: cat.color }}
                >
                  <span className="cat-emoji">{cat.emoji}</span>
                </div>
                <span className="cat-name">{cat.name}</span>
              </button>
            ))}
            {/* More button */}
            <button className="cat-card">
              <div className="cat-icon-wrap" style={{ background: '#f0f0f5' }}>
                <span className="cat-emoji">⋯</span>
              </div>
              <span className="cat-name">More</span>
            </button>
          </div>
          <button className="cat-arrow cat-arrow-right" onClick={() => scroll(1)}>›</button>
        </div>
      </div>
    </section>
  );
}
