import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <nav>
            <Link to= '/'>Home</Link>
            <Link to= '/order'>order</Link>
            <Link to= '/grandpa'>Grandpa</Link>
            <Link to= '/about'>about</Link>
            <Link to= '/contact'>contact</Link>
            <hr />
        </nav>
    );
};

export default Header;