import React from 'react';
import './Filters.scss';

const Filters = ({ onFilterChange, onSortChange }) => {
  return (
    <div className="filters-container">
      <h3>Filters</h3>
      
      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={e => onFilterChange('category', e.target.value)}>
          <option value="all">All</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="beauty">Beauty</option>

        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <label htmlFor="price-range">Price Range:</label>
        <input type="range" id="price-range" min="0" max="1000" step="10" onChange={e => onFilterChange('price', e.target.value)} />
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label htmlFor="rating">Rating:</label>
        <select id="rating" onChange={e => onFilterChange('rating', e.target.value)}>
          <option value="0">All</option>
          <option value="4">4 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
        </select>
      </div>

      {/* Stock Status Filter */}
      <div className="filter-group">
        <label htmlFor="stock-status">Stock Status:</label>
        <select id="stock-status" onChange={e => onFilterChange('stock', e.target.value)}>
          <option value="all">All</option>
          <option value="In Stock">In Stock</option>
          <option value="Low Stock">Low Stock</option>
          <option value="Out of Stock">Out of Stock</option>
        </select>
      </div>

      {/* Tag Filter */}
      <div className="filter-group">
        <label htmlFor="tags">Tags:</label>
        <input type="text" id="tags" placeholder="Enter tags" onBlur={e => onFilterChange('tags', e.target.value.split(','))} />
      </div>

      {/* Brand Filter */}
      <div className="filter-group">
        <label htmlFor="brand">Brand:</label>
        <select id="brand" onChange={e => onFilterChange('brand', e.target.value)}>
          <option value="all">All</option>
          <option value="essence">Essence</option>
          <option value="apple">Apple</option>
        </select>
      </div>

      {/* Sort Options */}
      <div className="filter-group">
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" onChange={onSortChange}>
          <option value="default">Default</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="rating-desc">Rating (High to Low)</option>
          <option value="date-newest">Newest First</option>
          <option value="date-oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;

