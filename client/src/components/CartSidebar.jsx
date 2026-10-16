import { useCart } from '../context/CartContext'

export default function CartSidebar() {
  const { cartItems, removeFromCart, updateQty, cartTotal, cartCount, isCartOpen, setIsCartOpen, clearCart } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)} />
      <div className="cart-sidebar">
        {/* Header */}
        <div className="cart-header">
          <h2>🛒 My Cart {cartCount > 0 && <span style={{ background:'rgba(255,255,255,.2)', padding:'2px 8px', borderRadius:20, fontSize:'.8rem' }}>{cartCount}</span>}</h2>
          <button className="cart-close" onClick={() => setIsCartOpen(false)}>✕</button>
        </div>

        {/* Body */}
        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <span>🛒</span>
              <p style={{ fontWeight: 600, marginBottom: 4 }}>Your cart is empty!</p>
              <p style={{ fontSize: '.85rem' }}>Add items to get started</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-emoji" style={{ background: item.bgColor }}>
                  {item.emoji}
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹{item.price * item.qty}</div>
                </div>
                <div className="cart-item-qty">
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.qty - 1)}>−</button>
                  <span style={{ fontWeight: 700, minWidth: 20, textAlign: 'center' }}>{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    style={{ background:'none', border:'none', cursor:'pointer', color:'#e53935', fontSize:'.9rem', marginLeft:4 }}
                  >🗑</button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total ({cartCount} items)</span>
              <span>₹{cartTotal}</span>
            </div>
            <button className="checkout-btn">
              ⚡ Place Order — ₹{cartTotal}
            </button>
            <button
              onClick={clearCart}
              style={{ marginTop:8, width:'100%', background:'none', border:'none', color:'#888', fontSize:'.82rem', cursor:'pointer', padding:'6px' }}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
