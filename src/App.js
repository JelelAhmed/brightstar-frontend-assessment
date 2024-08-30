import React, { useState, useEffect } from 'react';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Layout from './components/Layout';
import useFetchProducts from './hooks/useFetchProducts';
import {
  filterByCategory,
  filterByPriceRange,
  filterByRating,
  filterByStockStatus,
  filterByTags,
  filterByBrand,
  sortByPrice,
  sortByRating,
  sortByDate
} from './utils/filter';
import './App.scss';

const App = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(30); // Number of products per page
  const skip = (page - 1) * limit;
  const { products, loading, error, total } = useFetchProducts(skip, limit);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterChange = (filterType, value) => {
    let filtered = products;

    if (filterType === 'category') {
      filtered = filterByCategory(filtered, value);
    } else if (filterType === 'price') {
      const [minPrice, maxPrice] = value.split(',').map(Number);
      filtered = filterByPriceRange(filtered, minPrice, maxPrice);
    } else if (filterType === 'rating') {
      filtered = filterByRating(filtered, Number(value));
    } else if (filterType === 'stock') {
      filtered = filterByStockStatus(filtered, value);
    } else if (filterType === 'tags') {
      filtered = filterByTags(filtered, value);
    } else if (filterType === 'brand') {
      filtered = filterByBrand(filtered, value);
    }

    setFilteredProducts(filtered);
  };

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    let sorted = filteredProducts;

    if (sortType.includes('price')) {
      sorted = sortByPrice(sorted, sortType);
    } else if (sortType.includes('rating')) {
      sorted = sortByRating(sorted, sortType);
    } else if (sortType.includes('date')) {
      sorted = sortByDate(sorted, sortType);
    }

    setFilteredProducts(sorted);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <Layout>
      <div className="filters">
        <Filters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      </div>
      <div className="product-list">
        {loading && <p>Loading products...</p>}
        {error && <p>Error fetching products: {error}</p>}
        <ProductList products={filteredProducts} />
        <div className="pagination">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
          >
            Previous
          </button>
          <span>Page {page}</span>
          <button
            disabled={skip + limit >= total}
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default App;
