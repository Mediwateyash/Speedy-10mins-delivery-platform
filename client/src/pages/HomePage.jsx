import Hero from '../components/Hero'
import Categories from '../components/Categories'
import DealsSection from '../components/DealsSection'
import PopularProducts from '../components/PopularProducts'
import ShopByNeed from '../components/ShopByNeed'
import DeliveryBanner from '../components/DeliveryBanner'
import Testimonials from '../components/Testimonials'
import AppDownload from '../components/AppDownload'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <div style={{ paddingTop: '106px' }}>
      <Hero />
      <Categories />
      <DealsSection />
      <PopularProducts />
      <ShopByNeed />
      <DeliveryBanner />
      <Testimonials />
      <AppDownload />
      <Newsletter />
      <Footer />
    </div>
  );
}
