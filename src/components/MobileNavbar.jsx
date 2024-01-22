import React, { useState, useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

const Accordion = ({ content, onClose }) => {
    const [isOpen, setIsOpen] = useState(false);
    const accordionRef = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (accordionRef.current && !accordionRef.current.contains(event.target)) {
                setIsOpen(false);
                onClose(); // Close the accordion when clicking outside
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [accordionRef, onClose]);

    return (
        <div ref={accordionRef} className="top-0 px-10 lg:px-6 xl:px-8 text-white fixed top-0 w-screen min-h-[70px] z-20 lg:hidden" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
            <div className='flex justify-between items-center'>
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
                <div className="" onClick={toggleAccordion}>
                    <div className='flex justify-between'>
                        <div className='text-[30px] cursor-pointer'>
                            {isOpen ? '☰' : '☰'}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen &&
                <div className="accordion-content">
                    <div className='pb-4'>
                        {content}
                    </div>
                </div>
            }
        </div>
    );
};

export default function App() {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);
    const location = useLocation();

    const closeAccordion = () => {
        setIsAccordionOpen(false);
    };

    useEffect(() => {
        closeAccordion(); // Close the accordion when the route changes
    }, [location.pathname]);

    return (
        <div>
            <Accordion
                content={
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
                }
                onClose={closeAccordion}
            />
            <Outlet />
        </div>
    );
}
