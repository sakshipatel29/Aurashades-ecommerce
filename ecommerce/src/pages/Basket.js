import React, { useContext } from 'react'
import { StoreContext } from '../context-and-reduce/StoreContext'
import { BasketProduct } from '../components/BasketProduct';

const Basket = () => {
  const {products, total} = useContext(StoreContext);
  
  return (
    <div>
      <div>
        <h3>Your Basket:</h3>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
      {products.map((products, i) => 
      <BasketProduct 
        key={i}
        item={products}
      />
      )}
    </div>
  )
}

export default Basket