import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_transparent.png';

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <nav className="bg-transparent backdrop-filter backdrop-blur-md bg-opacity-70 fixed w-full z-50">
            <div className="container mx-auto flex justify-around items-center">
                <div className="flex w-4/12 md:w-3/12 lg:w-2/12 items-center">
                    <Link to="/" className="flex items-center">
                        <img
                            src={logo}
                            className="w-2/3 md:w-auto mr-3"
                            alt="Dine Discover Logo"
                        />
                    </Link>
                </div>
                <div
                    className={`${isMenuOpen ? 'block' : 'hidden'
                        } w-full md:flex md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
                        <li>
                            <Link
                                to="/"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                                aria-current="page"
                            >
                                {props.home}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/discover"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                {props.discover}
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="block py-2 pl-3 pr-4 text-white hover:text-blue-200"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
                <button
                    type="button"
                    onClick={handleMenuToggle}
                    className={`inline-flex items-center p-2 w-10 h-10 justify-center rounded-lg md:hidden hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white dark:focus:ring-gray-600 ${isMenuOpen ? 'text-white' : 'text-gray-300'
                        }`}
                    aria-expanded={isMenuOpen ? 'true' : 'false'}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
