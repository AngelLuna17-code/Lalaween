import './App.css';
import Promociones1 from './components/Promociones1.tsx';
import Promociones2 from "./components/Promociones2.tsx";
import NB from "./components/NB.jsx";
import Accordion1 from "./components/Accordion1.jsx";

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className='container'>
        <NB />
        <div>
          <Accordion1/>
        </div>
      </div>
    </div>
  );
}
export default App;
