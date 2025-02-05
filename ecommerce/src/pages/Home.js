import React from 'react'
import Navbar from '../components/Navbar';
import sunglassesData from '../Data';
import Product from '../components/Product';

const Home = () => {
  return (
    <div>
    <Navbar />
    <h2>Welcome!</h2>
    <h3>New In</h3>
    <div>
    {sunglassesData.map((item,i) => 
    <Product 
        key={i}
        item={item}
    />
    )}
    </div>
    </div>
  )
}

export default Home;