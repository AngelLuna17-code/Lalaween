import React from 'react';
import { Outlet, Link } from "react-router-dom";

const Accordion = ({ content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="top-0 px-10 lg:px-6 xl:px-8 text-white fixed top-0 w-screen min-h-[70px] z-20 lg:hidden" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="/">
                        <div className="flex items-center min-h-[70px]">
                            <div >
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
    return (
        <div>
            <Accordion
                content={
                    <ul className='list-none list-inside'>
                        <li>
                            <Link className="mt-3" to="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link className="mt-3" to="/">
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link className="mt-3" to="/">
                                Productos
                            </Link>
                        </li>
                        <li>
                            <Link className="mt-3" to="/Facturas">
                                Facturas
                            </Link>
                        </li>
                        <li>
                            <Link className="mt-3" to="/Promo">
                                Promociones
                            </Link>
                        </li>
                    </ul>
                }
            />
            <Outlet />
        </div>
    );
}