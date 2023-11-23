import './App.css';
import Promociones1 from './components/Promociones1.tsx';
import Promociones2 from "./components/Promociones2.tsx";
import NB from "./components/NB.jsx";
function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className=''>
        <NB />
        <div className='container sm:container md:container lg:container xl:container xxl:container mx-auto px-8'>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 divide-y'>
            <Promociones1 />
          </div>
          <div>
            <Promociones2 />
          </div>
        </div>

      </div>

    </div>
  );
}
export default App;
