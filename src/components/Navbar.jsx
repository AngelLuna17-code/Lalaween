import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 text-white justify-between items-center top-0 p-4">
      {/* Columna 1 */}
      <div className="flex items-center">
        <div>
          <img style={{ height: "47px", width: "100%" }} src="logo.svg" alt="logo" />
        </div>
        <div className="ml-2">
          <p>Lalaween</p>
        </div>
      </div>
      {/* Columna 2 */}
      <div className='overflow-hidden'>
        <ul className='list-none flex space-x-4 '>
          <a href=""><li>Inicio</li></a>
          <a href=""><li>Productos</li></a>
          <a href=""><li>Servicio</li></a>
          <a href=""><li>Contacto</li></a>
          <a href=""><li>Promociones</li></a>
        </ul>
      </div>
      {/* Columna 3 */}
      <div className="flex items-center space-x-4">
        <img style={{ height: "22px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="facebook.svg" alt="facebook" />
        <img style={{ height: "22px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="instagram.svg" alt="instagram" />
        <img style={{ height: "22px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="tiktok.svg" alt="tiktok" />
        <img style={{ height: "22px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="whatsapp.svg" alt="whatsapp" />
        <img style={{ height: "22px", width: "100%", filter: "brightness(0) invert(1)", transition: "all 0.3s ease" }} src="envelope.svg" alt="correo" />
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
