import React from 'react';

const Navbar = () => {
  return (
    <div className="flex bg-gray-800 text-white">
      {/* Columna 1 */}
      <div className="flex-none p-4">Logo</div>

      {/* Columna 2 */}
      <div className="flex-grow p-4">Menú</div>

      {/* Columna 3 */}
      <div className="flex-none p-4">Usuario</div>
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
