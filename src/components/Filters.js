import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../utils/formatText';
import './Filters.scss';

const Filters = ({ onFilterChange, onSortChange, brands, categories }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);
  const [isRatingOpen, setIsRatingOpen] = useState(true);
  const [isStockStatusOpen, setIsStockStatusOpen] = useState(true);
  const [isTagsOpen, setIsTagsOpen] = useState(true);
  const [isBrandOpen, setIsBrandOpen] = useState(true);

	const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

	const handlePriceRangeChange = () => {
    onFilterChange('price', { min: minPrice, max: maxPrice });
  };

	const handleTagFilterChange = (value) => {
    const tags = value.split(',').map(tag => tag.trim());
    onFilterChange('tags', tags);
  };

  return (
    <div className="filters-container">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div className="filter-group">
        <label htmlFor="category" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
          Category:
        </label>
        {isCategoryOpen && (
          <select id="category" onChange={e => onFilterChange('category', e.target.value)}>
            <option value="all">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{capitalizeFirstLetter(category)}</option>
            ))}
          </select>
        )}
      </div>

      {/* Price Range Filter */}
      <div className="filter-group">
        <label htmlFor="price-range" onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}>
          Price Range:
        </label>
        {isPriceRangeOpen && (
          <div>
            <input
              type="range"
              id="min-price"
              min="0"
              max="1000"
              step="10"
              value={minPrice}
              onChange={e => {
                setMinPrice(e.target.value);
                handlePriceRangeChange();
              }}
            />
            <input
              type="range"
              id="max-price"
              min="0"
              max="1000"
              step="10"
              value={maxPrice}
              onChange={e => {
                setMaxPrice(e.target.value);
                handlePriceRangeChange();
              }}
            />
            <div>
              <span>Min: ${minPrice}</span> - <span>Max: ${maxPrice}</span>
            </div>
          </div>
        )}
      </div>

      {/* Rating Filter */}
      <div className="filter-group">
        <label htmlFor="rating" onClick={() => setIsRatingOpen(!isRatingOpen)}>
          Rating:
        </label>
        {isRatingOpen && (
          <select id="rating" onChange={e => onFilterChange('rating', e.target.value)}>
						<option value="0">All</option>
            <option value="1">1 Star & Up</option>
            <option value="2">2 Stars & Up</option>
            <option value="3">3 Stars & Up</option>
            <option value="4">4 Stars & Up</option>
            <option value="5">5 Stars</option>
          </select>
        )}
      </div>

      {/* Stock Status Filter */}
      <div className="filter-group">
        <label htmlFor="stock-status" onClick={() => setIsStockStatusOpen(!isStockStatusOpen)}>
          Stock Status:
        </label>
        {isStockStatusOpen && (
          <select id="stock-status" onChange={e => onFilterChange('stock', e.target.value)}>
            <option value="all">All</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        )}
      </div>

      {/* Tag Filter */}
      <div className="filter-group">
				<label htmlFor="tags" onClick={() => setIsTagsOpen(!isTagsOpen)}>
					Tags:
				</label>
				{isTagsOpen && (
					<input
						type="text"
						id="tags"
						placeholder="Enter tags separated by commas"
						onChange={e => handleTagFilterChange(e.target.value)}
					/>
				)}
			</div>

      {/* Brand Filter */}
      <div className="filter-group">
        <label htmlFor="brand" onClick={() => setIsBrandOpen(!isBrandOpen)}>
          Brand:
        </label>
        {isBrandOpen && (
          <select id="brand" onChange={e => onFilterChange('brand', e.target.value)}>
            <option value="all">All</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>{brand}</option>
            ))}
          </select>
        )}
      </div>

      {/* Sort Options */}
      <div className="filter-group">
        <label htmlFor="sort">
          Sort by:
        </label>
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
