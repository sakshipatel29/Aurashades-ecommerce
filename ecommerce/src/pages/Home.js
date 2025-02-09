import React from 'react';
import Navbar from '../components/Navbar';
import sunglassesData from '../Data';
import Product from '../components/Product';
import './Home.css'; // Importing the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <h2 className="welcome-text">Welcome!</h2>
      <h3 className="new-in-text">New In</h3>
      <div className="product-container">
        {sunglassesData.map((item, i) => (
          <Product key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
