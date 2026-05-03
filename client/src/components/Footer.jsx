import { ShoppingCart, Globe, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <ShoppingCart size={20} />
          <span>ShopSmart</span>
          <p>Your smart choice for online shopping.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
        </div>
        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Globe size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <MessageCircle size={20} />
            </a>
            <a href="mailto:support@shopsmart.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopSmart. All rights reserved.</p>
      </div>
    </footer>
  );
}
