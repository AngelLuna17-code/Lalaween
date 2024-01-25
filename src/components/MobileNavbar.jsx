
import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const MobileNavbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="top-0 px-10 lg:px-6 xl:px-8 text-white fixed top-0 w-screen min-h-[70px] z-20 lg:hidden" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
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
                <button onClick={toggleMenu}>
                    ☰
                </button>
                {menuOpen && (
                    <div>
                        <ul className='list-none list-inside'>
                            <li className="mt-3">
                                <Link to="/">
                                    Inicio
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/">
                                    Servicios
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/">
                                    Productos
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/Facturas">
                                    Facturas
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link to="/Promo">
                                    Promociones
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <Outlet />
        </div>
    );
};

export default MobileNavbar;

