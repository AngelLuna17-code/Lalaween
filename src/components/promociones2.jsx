import React from 'react';

const Promociones2 = () => {

  const list = [
    /* Pa' que le emprendas */
    {
      titlePaq: "Pa' que le emprendas",
      sub: "En sus marcas, listos... ¡¡Fuera!!",
      oldPrice: "$8,100.00 + IVA",
      newPrice: "$3,500.00 + IVA",
    },
    /* Pa' que le emprendas */
    /* Pa' queten bien informados */
    {
      titlePaq: "Pa' queten bien informados",
      sub: "Ante una incognita se la solución",
      oldPrice: "$5,800.00 + IVA * Mes",
      newPrice: "$3,780.00 + IVA * Mes",
    },
    /* Pa' queten bien informados */
    /* Pa' quete encuentren siempre */
    {
      titlePaq: "Pa' quete encuentren siempre",
      sub: "Ante la duda una solución",
      oldPrice: "$26,950.00 + IVA * Mes",
      newPrice: "$15,950.00 + IVA * Mes",
    },
    /* Pa' quete encuentren siempre */
    /* Pa' que economices */
    {
      titlePaq: "Pa' que economices",
      sub: "Inicia tu presencia en redes sociales y crece tu negocio",
      oldPrice: "$5,250.00 + IVA * Mes",
      newPrice: "$2,625.00 + IVA * Mes",
    },
    /* Pa' que economices */
    /* Pa' quete des a conocer */
    {
      titlePaq: "Pa' quete des a conocer",
      sub: "Inicia tu presencia en redes sociales y crece tu negocio",
    }
    /* Pa' quete des a conocer */
  ];

  return (
    <section>
      <div className='container mx-auto mt-[100px] py-[50px] lg:py-[100px]'>
        <div className='grid grid-cols-3 gap-5'>
          {list.map((item, index) => (
            <div className='p-5 rounded-lg flex items-center justify-center' style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
              <div>
                <div className='text-center'>
                  <h3 className='text-[#00a09b] font-black text-[23px] typing'>
                    {item.titlePaq}
                  </h3>
                  <p>
                    {item.sub}
                  </p>
                </div>
                <div className='text-center text-white mt-5 typing font-thin'>
                  <p className='line-through'>
                    COSTO REAL
                  </p>
                  <p className='line-through'>
                    {item.oldPrice}
                  </p>
                  <p className='text-[#00a09b]'>
                    COSTO PROMOCIONAL
                  </p>
                  <p>
                    {item.newPrice}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Promociones2;