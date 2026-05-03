import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Mail, Calendar, ShoppingBag } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Profile() {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return <div className="loading-container">Loading profile...</div>;
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="profile-page">
      <h1>My Profile</h1>

      <div className="profile-card">
        <div className="profile-avatar">
          <User size={48} />
        </div>
        <div className="profile-info">
          <h2>{user.name}</h2>
          <div className="profile-detail">
            <Mail size={16} />
            <span>{user.email}</span>
          </div>
          <div className="profile-detail">
            <Calendar size={16} />
            <span>Member since {new Date(user.id).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <ShoppingBag size={24} />
          <h3>Orders</h3>
          <p>0</p>
        </div>
        <div className="stat-card">
          <User size={24} />
          <h3>Wishlist</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}
