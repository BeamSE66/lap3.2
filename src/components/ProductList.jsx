import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');

  // ฟิลเตอร์ + ค้นหา + เรียงลำดับ
  const filteredProducts = useMemo(() => {
    let filtered = selectedCategory === 'all'
      ? products
      : products.filter((p) => p.category === selectedCategory);

    // Search
    filtered = filtered.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort
    if (sortBy === 'price') filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="product-list-container">
      <div className="header">
        <h1>🛍️ ร้านค้าออนไลน์</h1>
        <p>Lab 3.2 - Components & Props (Challenge)</p>
      </div>

      {/* Filter Controls */}
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <label htmlFor="category-select">หมวดหมู่: </label>
        <select
          id="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '5px', fontSize: '16px', marginRight: '10px' }}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="ค้นหาสินค้า..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '5px', fontSize: '16px', marginRight: '10px' }}
        />

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '5px', fontSize: '16px' }}
        >
          <option value="name">ชื่อสินค้า</option>
          <option value="price">ราคาต่ำสุด → สูงสุด</option>
          <option value="rating">เรตติ้งสูงสุด</option>
        </select>
      </div>

      {/* Product Display */}
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1' }}>
            ❌ ไม่พบสินค้าที่ตรงกับการค้นหา
          </p>
        )}
      </div>
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onViewDetails: PropTypes.func.isRequired
};

export default ProductList;
