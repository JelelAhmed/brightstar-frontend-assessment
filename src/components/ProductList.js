import React from 'react';
import ProductCard from './ProductCard';
import '../styles/ProductList.scss';

const ProductList = ({ products }) => {
  return (
    <div className="product-list-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
