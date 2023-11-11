import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 text-white flex flex-row gap-5 items-center justify-center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/ContactForm" >
                Contact Us
            </Link>
        </nav>
    );
};

export default Navbar;