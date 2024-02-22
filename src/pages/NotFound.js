import React from 'react';
import SmallStars from "../components/SmallStars"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const NotFound = () => {

  return (
    <section>
      {/* Stars */}
      <SmallStars />
      {/* Stars */}
      {/* Navbar */}
      <Navbar />
      {/* Navbar */}
      <div className='flex items-center justify-center'>
        <div className='py-[300px] text-center'>
          <h1>Error 404</h1>
          <p>Página no encontrada</p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Footer */}
    </section>
  );
};

export default NotFound;