import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Truck, Shield, Headphones } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getAllProducts } from '../services/productService';
import { fetchHealth } from '../services/api';

export default function Home() {
  const [featured, setFeatured] = useState([]);
  const [health, setHealth] = useState(null);

  useEffect(() => {
    getAllProducts().then(products => setFeatured(products.slice(0, 4)));
    fetchHealth().then(setHealth).catch(() => setHealth(null));
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Shop Smarter, Live Better</h1>
          <p>Discover amazing products at unbeatable prices. Your one-stop shop for everything you need.</p>
          <Link to="/products" className="btn-primary btn-large">
            Shop Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <Truck size={32} />
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="feature">
          <Shield size={32} />
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
        <div className="feature">
          <Headphones size={32} />
          <h3>24/7 Support</h3>
          <p>Dedicated support team</p>
        </div>
        <div className="feature">
          <ShoppingBag size={32} />
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </section>

      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="view-all">
          <Link to="/products" className="btn-secondary">
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {health && (
        <section className="backend-status">
          <div className="status-card">
            <h3>Backend Status</h3>
            <p>Status: <span className="status-ok">{health.status}</span></p>
            <p>Message: {health.message}</p>
            <p>Timestamp: {new Date(health.timestamp).toLocaleString()}</p>
          </div>
        </section>
      )}
    </div>
  );
}
