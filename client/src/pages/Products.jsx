import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { getAllProducts, getCategories, searchProducts } from '../services/productService';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    setLoading(true);
    getCategories().then(setCategories);

    const fetch = searchQuery
      ? searchProducts(searchQuery)
      : getAllProducts();

    fetch.then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, [searchQuery]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>{searchQuery ? `Search: "${searchQuery}"` : 'All Products'}</h1>
        <p>{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>
      </div>

      <div className="products-layout">
        <aside className="filters">
          <div className="filter-header">
            <Filter size={18} />
            <h3>Categories</h3>
          </div>
          <div className="category-list">
            <button
              className={selectedCategory === 'All' ? 'active' : ''}
              onClick={() => handleCategoryChange('All')}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={selectedCategory === cat ? 'active' : ''}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <div className="products-content">
          {loading ? (
            <div className="loading">Loading products...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="empty-state">
              <Search size={48} />
              <h3>No products found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          ) : (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
