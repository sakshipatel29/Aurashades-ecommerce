import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../context-and-reduce/StoreContext'

const Navbar = () => {
    const {products} = useContext(StoreContext);
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/basket'>Basket
            <span>{products.length}</span>
            </Link>
        </div>
    )
}

export default Navbar;