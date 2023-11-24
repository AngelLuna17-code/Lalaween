import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 text-white">
      {/* Columna 1 */}
      <div className="flex  items-center ">
        <div>
          <img style={{ height: "47px", width: "100%" }} src="logo.svg" alt="logo" />
        </div>
        <div>
          <p>Lalaween</p>
        </div>
      </div>
      <div className='overflow-hidden flex items-center'>
        <div className=''>
          <ul className='list-none flex space-x-4 '>
            <a href=""><li>Inicio</li></a>
            <a href=""><li>Productos</li></a>
            <a href=""><li>Servicio</li></a>
            <a href=""><li>Contacto</li></a>
            <a href=""><li>Promociones</li></a>
          </ul>
        </div>
      </div>
      {/* Columna 3 */}
      <div className="">
      
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      {/* Resto del contenido de la aplicación */}
    </div>
  );
};

export default App;
