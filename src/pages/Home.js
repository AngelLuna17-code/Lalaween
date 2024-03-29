import Stars from "../components/Stars.jsx";
import Hero from "../components/Hero.jsx";
import ServiceCards from "../components/ServiceCards.jsx";
import SliderComponent from "../components/SliderComponent.jsx";
import Mapa from "../components/Mapa.jsx";
import Contacto from "../components/Contacto.jsx";
import Footer from "../components/Footer.jsx";
import FloatingButton from "../components/FloatingButton.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const Home = () => {
    return (
        <section>
            {/* Stars */}
            <Stars />
            {/* Stars */}
            {/* Hero */}
            <Hero />
            {/* Hero */}
            {/* Servicios */}
            <div id="service">
                <ServiceCards />
            </div>
            {/* Servicios */}
            {/* Slider */}
            <div id="portafolio">
                <SliderComponent />
            </div>
            {/* Slider */}
            {/* Mapa */}
            <Mapa />
            {/* Mapa */}
            {/* Contacto */}
            <Contacto />
            {/* Contacto */}
            {/* Footer */}
            <Footer />
            {/* Footer */}
            {/* Floating Buttons */}
            <ScrollToTopButton />
            <FloatingButton />
            {/* Floating Buttons */}
        </section>
    );
};

export default Home;
