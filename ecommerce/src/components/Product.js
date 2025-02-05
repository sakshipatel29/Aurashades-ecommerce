import React, { useContext } from 'react'
import { StoreContext } from '../context-and-reduce/StoreContext';

const Product = ({item}) => {

  const {addToBasket} = useContext(StoreContext);

  const handleAdd = () => {
    addToBasket(item);
  }
  
  return (
    <div>
        <img src={item.image} alt='glasses' width={400} height={400}/>
            <div>
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <div>
                    <button onClick={handleAdd}>Add to Basket</button>
                </div>
            </div>
    </div>
  )
}

export default Product