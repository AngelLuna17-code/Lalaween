import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section>
            <div>
                {/* Existing content */}
                <div className="top-0 px-10 lg:px-6 xl:px-8 text-white fixed top-0 w-screen min-h-[70px] z-30 lg:hidden" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                    <div className='flex Space-between'>
                        <div>
                            <Link to="/">
                                <div className="flex items-center min-h-[70px]">
                                    <div>
                                        <img style={{ height: "37px", width: "100%" }} src="logo.webp" alt="logo" loading="lazy" />
                                    </div>
                                    <div className="ml-2">
                                        <p>Lalaween</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <button
                                className=""
                                onClick={toggleMenu}
                            >
                                ☰
                            </button>
                        </div>
                    </div>
                    <div
                        className={`lg:flex lg:items-center ${isMenuOpen ? 'block' : 'hidden'
                            }`}
                    >
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4" href="#home">
                            Home
                        </a>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4" href="#about">
                            About
                        </a>
                        <a className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4" href="#services">
                            Services
                        </a>
                    </div>
                </div>
            </div>
            <Outlet />
        </section>
    );
};

export default Navbar;

