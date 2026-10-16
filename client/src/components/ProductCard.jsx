import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, isInWishlist, isInCart } = useCart();
  const [added, setAdded] = useState(false);
  const inWish = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const stars = Array(5).fill(0).map((_, i) => (
    <span key={i} className={`star ${i < Math.round(product.rating) ? 'star-filled' : 'star-empty'}`}>★</span>
  ));

  return (
    <div className="product-card">
      {/* Discount badge */}
      {product.discount > 0 && (
        <div className="p-discount-badge">{product.discount}% OFF</div>
      )}

      {/* Wishlist */}
      <button
        className={`p-wish-btn${inWish ? ' wished' : ''}`}
        onClick={() => toggleWishlist(product)}
        title={inWish ? 'Remove from wishlist' : 'Add to wishlist'}
      >
        {inWish ? '❤️' : '🤍'}
      </button>

      {/* Image / Emoji */}
      <div className="p-image-wrap" style={{ background: product.bgColor }}>
        <span className="p-emoji">{product.emoji}</span>
      </div>

      {/* Info */}
      <div className="p-body">
        <div className="p-rating">
          {stars}
          <span className="p-rating-num">{product.rating}</span>
          <span className="p-reviews">({product.reviews})</span>
        </div>

        <h3 className="p-name">{product.name}</h3>
        <span className="p-unit">{product.unit}</span>

        <div className="p-pricing">
          <span className="p-price">₹{product.price}</span>
          {product.mrp > product.price && (
            <span className="p-mrp">₹{product.mrp}</span>
          )}
        </div>

        <button
          className={`p-add-btn${added || inCart ? ' p-add-btn-active' : ''}`}
          onClick={handleAdd}
        >
          {added ? '✓ Added!' : inCart ? '+ Add More' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
