import { useState } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [done, setDone]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setDone(true); setEmail(''); }
  };

  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="newsletter-inner">
          <div className="nl-left">
            <span className="nl-icon">✉️</span>
            <span className="nl-text">Get the latest deals delivered to your inbox.</span>
          </div>
          {done ? (
            <div className="nl-success">✅ You're subscribed! Thanks for joining.</div>
          ) : (
            <form className="nl-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="nl-input"
                required
              />
              <button type="submit" className="nl-btn">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
