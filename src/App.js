import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Facturas from "./pages/Facturas"
import Promo from "./pages/Promo"
import NotFound from './pages/NotFound';
import Footer from "./components/Footer"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Promo" element={<Promo />} />
        <Route path="/Facturas" element={<Facturas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;