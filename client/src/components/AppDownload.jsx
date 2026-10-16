import './AppDownload.css'

/* Official Play Store & App Store SVG logos */
function PlayStoreLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <linearGradient id="ps1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00b4ff"/>
        <stop offset="100%" stopColor="#0070ff"/>
      </linearGradient>
      <linearGradient id="ps2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff3a44"/>
        <stop offset="100%" stopColor="#c31162"/>
      </linearGradient>
      <linearGradient id="ps3" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#32a071"/>
        <stop offset="100%" stopColor="#00f076"/>
      </linearGradient>
      <linearGradient id="ps4" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ffd200"/>
        <stop offset="100%" stopColor="#ff8a00"/>
      </linearGradient>
      <path d="M35.5 3.7C23.4 10.5 15 23.5 15 40v432c0 16.5 8.4 29.5 20.5 36.3l2.2 1.2 241.8-241.8v-5.7L37.7 20.5 35.5 3.7z" fill="url(#ps1)"/>
      <path d="M336.9 222.5l-80.6-80.7v-5.7l80.6-80.6 1.8 1 95.5 54.2c27.3 15.5 27.3 40.9 0 56.4l-95.5 54.2-1.8 1.2z" fill="url(#ps4)"/>
      <path d="M338.7 221.3L256 138.6 35.5 359.1c9 9.5 23.8 10.7 40.5 1.2l262.7-139z" fill="url(#ps2)"/>
      <path d="M338.7 56.7L76 195.7c-16.7 9.5-31.5 8.3-40.5-1.2L256 173.4l82.7-116.7z" fill="url(#ps3)"/>
    </svg>
  );
}

function AppStoreLogo() {
  return (
    <svg width="22" height="22" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-157.2-122.1C148 537 125 347 125 263.2c0-30.2 7.2-59.2 20.2-85.5 27.5-53.2 79.4-88.6 136-90.5 40.6-1.4 80.9 24.6 105.2 24.6 24.5 0 70.7-30.9 122.7-30.9 24.4 0 108.5 1.9 162.8 73.2zm-166.2-162.7c12.3-17.2 20.8-40.3 20.8-63.4 0-32.6-16.8-67.1-43.8-89.1-21.9-18.4-52.7-32.1-82.3-32.1-5.4 0-10.7.3-15.6 1-11.5 1.4-24.5 9.4-35.3 18.7-13.3 11.3-24 28.1-24 51.1 0 33.2 15.3 65.2 43.6 88.2 21.9 17.7 50.7 28.5 78.4 28.5 4.4 0 8.8-.3 13.2-.9z" fill="white"/>
    </svg>
  );
}

export default function AppDownload() {
  return (
    <section className="app-section">
      <div className="container">
        <div className="app-inner">

          {/* Left: App Download */}
          <div className="app-left">
            <div className="app-phone-icon">📱</div>
            <div className="app-left-content">
              <h2 className="app-title">Your everyday shopping,<br />now in your pocket.</h2>
              <p className="app-sub">Scan the QR code or download the app now.</p>
              <div className="app-buttons">
                <a href="#" className="app-store-btn">
                  <PlayStoreLogo />
                  <div>
                    <span className="asb-small">GET IT ON</span>
                    <span className="asb-big">Google Play</span>
                  </div>
                </a>
                <a href="#" className="app-store-btn">
                  <AppStoreLogo />
                  <div>
                    <span className="asb-small">Download on the</span>
                    <span className="asb-big">App Store</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="qr-code">
              <div className="qr-inner">
                <div className="qr-grid">
                  {Array(25).fill(0).map((_,i) => (
                    <div key={i} className={`qr-cell${Math.random() > .4 ? ' qr-dark' : ''}`} />
                  ))}
                </div>
              </div>
              <span className="qr-label">Scan to Download</span>
            </div>
          </div>

          {/* Divider */}
          <div className="app-divider" />

          {/* Right: Stay updated */}
          <div className="app-right">
            <div className="app-right-icon">📣</div>
            <h3 className="app-right-title">Stay updated on new offers, partner deals and more!</h3>
            <button className="app-notify-btn">
              Subscribe to Notifications <span>→</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
