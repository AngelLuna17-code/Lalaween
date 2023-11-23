import React from 'react';

const App = () => {
  return (
    <div className=' bg-black'>
      <div className='grid grid-cols-12 '>
        {/* Navbar logo container */}
        <div className='col-span-1 flex items-center justify-center'>
          <a href="">
            <div className='flex items-center justify-center '>
              <div className='nav-logo-container'>
                <img src="/logo.svg" alt="logo" />
              </div>
              <div className='' style={{ fontSize: "16px", color: "white" }}>
                Lalaween
              </div>
            </div>
          </a>
        </div>
        {/* Navbar logo container */}

        {/* Navbar links */}

        <div className="flex items-center col-span-10">
          <div className="navbar-links ">
            <ul className="list-none ">
              <li className="inline-block ">
                <a href="index.html">Inicio</a>
              </li>
              <li className="inline-block ">
                <a href="#productos">Productos</a>
              </li>
              <li className="inline-block ">
                <a href="#servicios-d">Servicios</a>
              </li>
              <li className="inline-block">
                <a href="#contacto">Contacto</a>
              </li>
              <li className="inline-block">
                <a href="#">Promociones</a>
              </li>
            </ul>
          </div>
        </div>


        {/* Navbar links */}


        <div className="flex items-center col-span-1">
          <div className="navbar-links ">
            <ul className="list-none ">
              <li className="inline-block "></li>
              <li className="inline-block ">
                <img src="/facebook.svg" alt="" />
              </li>
              <li className="inline-block ">
                <a href="#servicios-d">Servicios</a>
              </li>
              <li className="inline-block">
                <a href="#contacto">Contacto</a>
              </li>
              <li className="inline-block">
                <a href="#">Promociones</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
