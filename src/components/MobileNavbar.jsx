import React from 'react';

const Accordion = ({ content }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="top-0 px-10 lg:px-6 xl:px-8 text-white fixed top-0 w-screen min-h-[70px] z-20 lg:invisible" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
            <div className='flex justify-between items-center'>
                <div>
                    <a href="/">
                        <div className="flex items-center min-h-[70px]">
                            <div >
                                <img style={{ height: "37px", width: "100%" }} src="/logo.svg" alt="logo" />
                            </div>
                            <div className="ml-2">
                                <p>Lalaween</p>
                            </div>
                        </div>
                    </a>
                </div>
                    <div className="" onClick={toggleAccordion}>
                        <div className='flex justify-between'>
                            <div className=''>
                                {isOpen ? '▲' : '☰'}
                            </div>
                        </div>
                    </div>
            </div>
            {isOpen &&
                        <div className="accordion-content">
                            <div className='p-2'>
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
                    <div>
                        <ul className='list-disc list-inside'>
                            <li className='mt-3'>Inicio</li>
                            <li className='mt-3'>Productos</li>
                            <li className='mt-3'>Servicios</li>
                            <li className='mt-3'>Contacto</li>
                            <li className='mt-3'>Promociones</li>
                        </ul>
                    </div>
                }
            />
        </div>
    );
}
