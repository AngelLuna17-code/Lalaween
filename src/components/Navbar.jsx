import React from 'react';

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center top-0 py-4 px-10 text-white fixed top-0 w-screen z-20" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
      <div className='flex items-center'>
        <div className="flex items-center mr-12">
          <div >
            <img style={{ height: "37px", width: "100%" }} src="logo.svg" alt="logo" />
          </div>
          <div className="ml-2">
            <p>Lalaween</p>
          </div>
        </div>
        <div className='overflow-hidden '>
          <ul className='list-none flex space-x-12 '>
            <a href=""><li>Inicio</li></a>
            <a href=""><li>Productos</li></a>
            <a href=""><li>Servicio</li></a>
            <a href=""><li>Contacto</li></a>
            <a href=""><li>Promociones</li></a>
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="facebook.svg" alt="facebook" />
        <img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="instagram.svg" alt="instagram" />
        <img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="tiktok.svg" alt="tiktok" />
        <img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="whatsapp.svg" alt="whatsapp" />
        <img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="envelope.svg" alt="correo" />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
