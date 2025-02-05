import React, { useContext } from 'react';
import { StoreContext } from '../context-and-reduce/StoreContext';

export const BasketProduct = ({item}) => {
    const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  }
  return (
    <div>
        <img src={item.image} alt={item.name + "glasses"} /> 
        <div>
            <p>{item.name}</p>
            <p>${item.price.toFixed(2)}</p>
        </div>
        <button onClick={handleRemove}>Remove</button>
    </div>
  )
}

export default BasketProduct