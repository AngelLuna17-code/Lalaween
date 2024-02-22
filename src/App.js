import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Facturas from "./pages/Facturas"
import Promo from "./pages/Promo"
import NotFound from './pages/NotFound';
/* Paquetes */
import Paquete1 from './pages/paquetes/Paquete1';
import Paquete2 from './pages/paquetes/Paquete2';
import Paquete3 from './pages/paquetes/Paquete3';
import Paquete4 from './pages/paquetes/Paquete4';
import Paquete5 from './pages/paquetes/Paquete5';
/* Paquetes */

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Facturas" element={<Facturas />} />
        <Route path="*" element={<NotFound />} />
        {/* Paquetes */}
        <Route path="/Paquete1" element={<Paquete1 />} />
        <Route path="/Paquete2" element={<Paquete2 />} />
        <Route path="/Paquete3" element={<Paquete3 />} />
        <Route path="/Paquete4" element={<Paquete4 />} />
        <Route path="/Paquete5" element={<Paquete5 />} />
        {/* Paquetes */}
      </Routes>
    </Router>
  );
};

export default App;