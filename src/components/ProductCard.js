import React from 'react';
import './ProductCard.scss';

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    tags,
    images,
    availabilityStatus,
    shippingInformation,
    warrantyInformation,
    reviews,
  } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={images[0]} alt={title} />
      </div>
      <div className="product-info">
        <div className="product-header">
          <h3>{title}</h3>
          <div className="price">${price.toFixed(2)}</div>
          {discountPercentage > 0 && (
            <div className="discount">Discount: {discountPercentage}%</div>
          )}
        </div>
        <div className="product-body">
          <p>{description}</p>
          <div className="rating">Rating: {rating} ⭐</div>
          <div className="stock-status">{availabilityStatus}</div>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="product-footer">
          <div className="reviews">
            {reviews.slice(0, 3).map((review, index) => (
              <div key={index} className="review">
                <div className="reviewer">{review.reviewerName}</div>
                <div className="comment">{review.comment}</div>
              </div>
            ))}
          </div>
          <div className="details">
            <div>Shipping: {shippingInformation}</div>
            <div>Warranty: {warrantyInformation}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
