// filtering functions

export const filterByCategory = (products, category) => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const filterByPriceRange = (products, minPrice, maxPrice) => {
  return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
};

export const filterByRating = (products, minRating) => {
  return products.filter(product => product.rating >= minRating);
};

export const filterByStockStatus = (products, status) => {
  if (status === 'all') return products;
  return products.filter(product => product.availabilityStatus === status);
};

export const filterByTags = (products, tags) => {
  if (tags.length === 0) return products;
	
  const lowerCaseTags = tags.map(tag => tag.trim().toLowerCase());

  return products.filter(product =>
    lowerCaseTags.every(tag =>
      product.tags.some(productTag => productTag.toLowerCase() === tag)
    )
  );
};

export const filterByBrand = (products, brand) => {
  if (brand === 'all') return products;
  return products.filter(product => product.brand === brand);
};

export const sortByPrice = (products, sortType) => {
  let sortedProducts = [...products];
  if (sortType === 'price-asc') {
    return sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'price-desc') {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }
  return products;
};

export const sortByRating = (products, sortType) => {
  let sortedProducts = [...products];
  if (sortType === 'rating-desc') {
    return sortedProducts.sort((a, b) => b.rating - a.rating);
  } else if (sortType === 'rating-asc') {
    return sortedProducts.sort((a, b) => a.rating - b.rating);
  }
  return products;
};

export const sortByDate = (products, sortType) => {
  let sortedProducts = [...products];
  if (sortType === 'date-newest') {
    return sortedProducts.sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt));
  } else if (sortType === 'date-oldest') {
    return sortedProducts.sort((a, b) => new Date(a.meta.createdAt) - new Date(b.meta.createdAt));
  }
  return products;
};
