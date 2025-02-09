import React, { useContext } from 'react';
import { StoreContext } from '../context-and-reduce/StoreContext';
import { BasketProduct } from '../components/BasketProduct';
import './Basket.css'; // Import the CSS file

const Basket = () => {
  const { products, total } = useContext(StoreContext);

  return (
    <div className="basket-container">
      <div className="basket-header">
        <h3>Your Basket</h3>
        <p className="total-amount">Total: ${total.toFixed(2)}</p>
      </div>
      <div className="basket-items">
        {products.length > 0 ? (
          products.map((item, i) => (
            <BasketProduct key={i} item={item} />
          ))
        ) : (
          <p className="empty-basket">Your basket is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Basket;
