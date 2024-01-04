import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout  from "./pages/Layout";
import Promo  from "./pages/Promo";
import Home  from "./pages/Home";
import Default  from "./pages/Default";
import Facturas  from "./pages/Facturas";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="Promo" element={<Promo />} />
           <Route path="/" element={<Home />} />
           <Route path="Facturas" element={<Facturas />} />
           <Route path="*" element={<Default />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
