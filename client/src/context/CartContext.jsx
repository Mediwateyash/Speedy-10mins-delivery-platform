import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const initialWishlist = [
  { id: 1,  name: 'Amul Taaza Milk',       category: 'Groceries',     price: 54,  mrp: 62,  discount: 13, emoji: '🥛', unit: '1L',    rating: 4.8, reviewsCount: '1.2k', image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=300&auto=format&fit=crop&q=80' },
  { id: 2,  name: "Lay's Classic Chips",   category: 'Snacks',        price: 20,  mrp: 25,  discount: 20, emoji: '🥔', unit: '52g',   rating: 4.6, reviewsCount: '8k',   image: 'https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=300&auto=format&fit=crop&q=80' },
  { id: 3,  name: 'Coca-Cola',             category: 'Beverages',     price: 45,  mrp: 60,  discount: 25, emoji: '🥤', unit: '750ml', rating: 4.7, reviewsCount: '15k',  image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300&auto=format&fit=crop&q=80' },
  { id: 5,  name: 'Dove Body Wash',        category: 'Personal Care', price: 119, mrp: 149, discount: 20, emoji: '🧴', unit: '250ml', rating: 4.7, reviewsCount: '11k',  image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&auto=format&fit=crop&q=80' },
  { id: 6,  name: 'Surf Excel Detergent',  category: 'Household',     price: 135, mrp: 160, discount: 16, emoji: '🧼', unit: '1kg',   rating: 4.6, reviewsCount: '7k',   image: 'https://images.unsplash.com/photo-1584813470613-5b1c1cad3d69?w=300&auto=format&fit=crop&q=80' },
  { id: 4,  name: 'Tata Salt',             category: 'Groceries',     price: 28,  mrp: 32,  discount: 13, emoji: '🧂', unit: '1kg',   rating: 4.5, reviewsCount: '6k',   image: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?w=300&auto=format&fit=crop&q=80' },
  { id: 15, name: 'Maggi Noodles',         category: 'Snacks',        price: 16,  mrp: 20,  discount: 20, emoji: '🍜', unit: '70g',   rating: 4.6, reviewsCount: '22k',  image: 'https://images.unsplash.com/photo-1612927601601-6638404737ce?w=300&auto=format&fit=crop&q=80' },
  { id: 21, name: 'Colgate Toothpaste',    category: 'Groceries',     price: 72,  mrp: 90,  discount: 20, emoji: '🪥', unit: '100g',  rating: 4.4, reviewsCount: '3.1k', image: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?w=300&auto=format&fit=crop&q=80' },
];

export function CartProvider({ children }) {
  const [cartItems, setCartItems]   = useState(() => {
    try { return JSON.parse(localStorage.getItem('speedy_cart')) || []; } catch { return []; }
  });
  const [wishlist, setWishlist]     = useState(() => {
    try {
      const saved = localStorage.getItem('speedy_wishlist');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
      return initialWishlist;
    } catch {
      return initialWishlist;
    }
  });
  const [notification, setNotification] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Persist cart
  useEffect(() => {
    localStorage.setItem('speedy_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist wishlist
  useEffect(() => {
    localStorage.setItem('speedy_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const showNotif = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 2500);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    showNotif(`${product.name} added to cart! 🛒`);
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
    showNotif('Item removed from cart', 'info');
  };

  const updateQty = (id, qty) => {
    if (qty <= 0) { removeFromCart(id); return; }
    setCartItems(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const clearCart = () => {
    setCartItems([]);
    showNotif('Cart cleared', 'info');
  };

  const toggleWishlist = (product) => {
    setWishlist(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) { showNotif('Removed from wishlist', 'info'); return prev.filter(i => i.id !== product.id); }
      showNotif('Added to wishlist ❤️');
      return [...prev, product];
    });
  };

  const isInWishlist = (id) => wishlist.some(i => i.id === id);
  const isInCart     = (id) => cartItems.some(i => i.id === id);
  const cartCount    = cartItems.reduce((sum, i) => sum + i.qty, 0);
  const cartTotal    = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{
      cartItems, addToCart, removeFromCart, updateQty, clearCart,
      wishlist, toggleWishlist, isInWishlist,
      isInCart, cartCount, cartTotal,
      notification, isCartOpen, setIsCartOpen,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};
