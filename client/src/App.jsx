import { Routes, Route } from 'react-router-dom'
import { CartProvider, useCart } from './context/CartContext'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import StorePage from './pages/StorePage'
import AboutPage from './pages/AboutPage'
import WishlistPage from './pages/WishlistPage'
import CartSidebar from './components/CartSidebar'
import NotificationToast from './components/NotificationToast'

function AppContent() {
  const { notification } = useCart();
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<HomePage />} />
          <Route path="/store"    element={<StorePage />} />
          <Route path="/about"    element={<AboutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="*"         element={<HomePage />} />
        </Routes>
      </main>
      <CartSidebar />
      {notification && <NotificationToast message={notification.msg} type={notification.type} />}
    </>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
