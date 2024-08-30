import React, { useState, useEffect } from 'react';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Layout from './components/Layout';
import useFetchProducts from './hooks/useFetchProducts';
import { filterByCategory, sortByPrice } from './utils/filter';
import './App.scss';

const App = () => {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterChange = (e) => {
    const category = e.target.value;
    const filtered = filterByCategory(products, category);
    setFilteredProducts(filtered);
  };

  const handleSortChange = (e) => {
    const sortType = e.target.value;
    const sorted = sortByPrice(filteredProducts, sortType);
    setFilteredProducts(sorted);
  };

  return (
    <Layout>
      <div className="filters">
        <Filters onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      </div>
      <div className="product-list">
        {loading && <p>Loading products...</p>}
        {error && <p>Error fetching products</p>}
        <ProductList products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default App;
