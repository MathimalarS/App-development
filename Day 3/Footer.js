import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import '../assets/css/Footer.css'; // Ensure your CSS file is properly linked

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Learn more about <br/>our company and mission.</p>
          <Link to="/aboutus">Read More</Link>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/products">Products</Link>
          <a href="/offer">Offers</a>
          <a href="/stores">Store Locator</a>
        </div>
        <div className="footer-section">
          <h4>Customer Service</h4>
          <a href="/contactus">Contact Us</a>
          <a href="/faq">FAQ</a>
          <a href="/feedback">Feedback</a>
        </div>
        <div className="footer-section">
          <h4>Subscribe to Our Newsletter</h4>
          <p>Stay updated with our latest news and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button type="submit" className="newsletter-button">Subscribe</button>
          </form>
        </div>
        <div className="footer-map-section">
          <h4>Our Location</h4>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345097375!2d144.9537363154468!3d-37.81627974251256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727a3b1677c9f0!2sFederation+Square!5e0!3m2!1sen!2sau!4v1549943744410"
              width="100%"
              height="150"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" style={{ color: '#1da1f2' }}></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram" style={{ color: '#e4405f' }}></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in" style={{ color: '#0077b5' }}></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
