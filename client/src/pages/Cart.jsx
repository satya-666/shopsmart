import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight, Trash2 } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';

export default function Cart() {
  const { items, totalPrice, clearCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <ShoppingCart size={64} />
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/products" className="btn-primary">
            Start Shopping <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            <div className="cart-items-header">
              <h2>Items ({items.length})</h2>
              <button className="clear-cart-btn" onClick={clearCart}>
                <Trash2 size={16} /> Clear Cart
              </button>
            </div>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>{totalPrice >= 50 ? 'Free' : '$5.00'}</span>
            </div>
            <div className="summary-row">
              <span>Tax</span>
              <span>${(totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${(totalPrice + (totalPrice >= 50 ? 0 : 5) + totalPrice * 0.08).toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="btn-primary btn-full btn-large">
              Proceed to Checkout <ArrowRight size={18} />
            </Link>
            <Link to="/products" className="btn-secondary btn-full">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
