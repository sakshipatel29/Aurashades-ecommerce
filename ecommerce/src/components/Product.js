import React, { useContext } from 'react';
import { StoreContext } from '../context-and-reduce/StoreContext';
import './Product.css'; // Import CSS file

const Product = ({ item }) => {
  const { addToBasket } = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
  };

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-info">
        <div className="product-details">
          <p className="product-name">{item.name}</p>
          <p className="product-price">${item.price}</p>
        </div>
        <button className="add-button" onClick={handleAdd}>
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
