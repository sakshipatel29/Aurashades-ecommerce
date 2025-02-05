import React from 'react'

const Product = ({item}) => {
  return (
    <div>
        <img src={item.image} alt='glasses' width={1000} height={1000}/>
            <div>
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                <div>
                    <button>Add to Basket</button>
                </div>
            </div>
    </div>
  )
}

export default Product