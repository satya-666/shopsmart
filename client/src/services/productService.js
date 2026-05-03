import { mockProducts } from '../data/mockProducts';

export function getAllProducts() {
  return Promise.resolve([...mockProducts]);
}

export function getProductById(id) {
  const product = mockProducts.find(p => p.id === Number(id));
  return product ? Promise.resolve({ ...product }) : Promise.reject(new Error('Product not found'));
}

export function getCategories() {
  const categories = [...new Set(mockProducts.map(p => p.category))];
  return Promise.resolve(categories);
}

export function searchProducts(query) {
  const lower = query.toLowerCase();
  const results = mockProducts.filter(p =>
    p.name.toLowerCase().includes(lower) ||
    p.description.toLowerCase().includes(lower) ||
    p.category.toLowerCase().includes(lower)
  );
  return Promise.resolve([...results]);
}
