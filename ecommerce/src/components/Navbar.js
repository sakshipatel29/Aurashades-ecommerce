import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context-and-reduce/StoreContext';
import './Navbar.css';

const Navbar = () => {
    const { products } = useContext(StoreContext);

    return (
        <nav className="navbar">
            <Link to='/' className="nav-link">Home</Link>
            <Link to='/basket' className="nav-link basket-link">
                Basket <span className="basket-count">{products.length}</span>
            </Link>
        </nav>
    );
}

export default Navbar;
