import React from 'react';

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center top-0 py-4 px-10 text-white fixed top-0 w-screen z-20" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
      <div className='flex items-center'>
        <a href="/">
          <div className="flex items-center mr-12">
            <div >
              <img style={{ height: "37px", width: "100%" }} src="logo.svg" alt="logo" />
            </div>
            <div className="ml-2">
              <p>Lalaween</p>
            </div>
          </div>
        </a>
        <div className='overflow-hidden '>
          <ul className='list-none flex space-x-12 '>
            <a href=""><li className='hover:text-[#00cac4]'>Inicio</li></a>
            <a href=""><li className='hover:text-[#00cac4]'>Productos</li></a>
            <a href=""><li className='hover:text-[#00cac4]'>Servicio</li></a>
            <a href=""><li className='hover:text-[#00cac4]'>Contacto</li></a>
            <a href=""><li className='hover:text-[#00cac4]'>Promociones</li></a>
          </ul>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <a href=""><img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease", ":hover": { filter: "brightness(1.2) hue-rotate(160deg)", }, }} src="facebook.svg" alt="facebook" /></a>
        <a href=""><img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="instagram.svg" alt="instagram" /></a>
        <a href=""><img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="tiktok.svg" alt="tiktok" /></a>
        <a href=""><img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="whatsapp.svg" alt="whatsapp" /></a>
        <a href=""><img style={{ height: "18px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="envelope.svg" alt="correo" /></a>
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
