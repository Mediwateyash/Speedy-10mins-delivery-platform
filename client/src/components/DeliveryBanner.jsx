import './DeliveryBanner.css'

export default function DeliveryBanner() {
  return (
    <section className="delivery-banner">
      <div className="container">
        <div className="dbanner-inner">
          <div className="dbanner-rider">
            <span className="rider-emoji">🛵</span>
            <div className="rider-trail">
              {['💨','💨','💨'].map((e,i) => (
                <span key={i} className="trail-dot" style={{ animationDelay: `${i*.15}s` }}>{e}</span>
              ))}
            </div>
          </div>
          <div className="dbanner-content">
            <p className="dbanner-pre">Your essentials, delivered in as little as</p>
            <div className="dbanner-main">
              <span className="dbanner-clock">⏱</span>
              <span className="dbanner-time">10 Minutes.</span>
            </div>
          </div>
          <div className="dbanner-right">
            <div className="dbanner-items">
              {['🥛','🍎','🥤','🍕','🧴'].map((e,i) => (
                <span key={i} className="dbanner-item animate-float" style={{ animationDelay: `${i*.2}s` }}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
