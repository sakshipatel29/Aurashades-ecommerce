import React, { useContext } from 'react';
import { StoreContext } from '../context-and-reduce/StoreContext';
import './BasketProduct.css'; // Import the CSS file

export const BasketProduct = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };

  return (
    <div className="basket-product">
      <img src={item.image} alt={item.name + " glasses"} className="product-image" />
      <div className="product-details">
        <p className="product-name">{item.name}</p>
        <p className="product-price">${item.price.toFixed(2)}</p>
      </div>
      <button className="remove-button" onClick={handleRemove}>
        Remove
      </button>
    </div>
  );
};

export default BasketProduct;
