import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {
    // State to control mobile menu visibility
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-custom-dark px-6 lg:px-36 py-4">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-sen font-bold text-2xl">
                    Finsweet
                </div>

                {/* Hamburger Menu Icon for Mobile */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>

                {/* Navigation Links */}
                <ul
                    className={`lg:flex space-x-4 ${menuOpen ? 'flex flex-col absolute top-16 left-0 bg-custom-dark w-full py-4 px-6 transition-all ease-in-out duration-300' : 'hidden lg:flex space-x-4'}`}
                >
                    <li>
                        <Link to="/" >
                            <Button variant="text" className="!font-sen !font-bold !text-custom-off-white">Home</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" >
                            <Button variant="text" className="!font-sen !font-bold !text-custom-off-white">Blog</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <Button variant="text" className="!font-sen !font-bold !text-custom-off-white">About Us</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" >
                            <Button variant="text" className="!font-sen !font-bold !text-custom-off-white">Contact Us</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/subscribe" >
                            <Button variant="contained" className="!font-sen !font-bold !text-custom-dark !bg-custom-off-white hover:!bg-yellow-500">Subscribe</Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
