import React from "react";

export default function App() {
    const list = [
        {
            /* Pa' que le emprendas */
            paquete: "Pa' que le emprendas",
            subtitle: "En sus marcas, listos... ¡¡Fuera!!",
            proposito: "Diseñar para comunicar de manera efectiva la personalidad, esencia e identidad de tu marca. Para generar un lanzamiento positivo desde la creación de su logotipo y a través de campañas publicitarias en redes sociales e impresos con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar, sin perder su autenticidad.",
            /*UL-1 */
            li1Item1: "Asesoramiento en la personalización de la idea de negocio.",
            li1Item2: "Creación de Logotipo para la identidad de tu marca.",
            li1Item3: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
            /*UL-1 */
            /*UL-2 */
            li2Item1: "Diseño de Logotipo.",
            li2Item2: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).",
            li2Item3: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2Item4: "12 Publicaciones en imagen.",
            li2Item5: "4 Historias (imagen y video).",
            li2Item6: "1 Social video para reel o tiktok.",
            li2Item7: "1 Diseño de tarjeta de presentación en formato JPG para impresión.",
            li2Item8: "1 Diseño de Volante en formato JPG para impresión.",
            li2Item9: "1 Diseño de firma para correo en PNG y JPG para uso digital.",
            /*UL-2 */
            /*UL-3 */
            li3Item1: "Se realizan 3 propuestas de logotipo y se selecciona uno que será entregado en formato .JPG .PNG .Ai y .EPS.",
            li3Item2: "Formato optimizado para Facebook e Instagram.",
            li3Item3: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            li3Item4: "Coaching de comunicación visual para la ponencia online e impresos.",
            li3Item5: "Asesoramiento general para pautas en redes sociales.",
            /*UL-3 */
            oldPrice: "$8,100.00 + IVA",
            newPrice: "$3,500.00 + IVA"
            /* Pa' que le emprendas */
        },
        {
            /* Pa' queten bien informados */
            paquete: "Pa' queten bien informados",
            subtitle: "Ante una incognita se la solución",
            proposito: "Diseñar y ejecutar de manera efectiva campañas publicitarias e informativas sin que la marca pierda su esencia y autenticidad, a través de un lanzamiento positivo en redes sociales con diseños óptimos y atractivos para el nicho de mercado al que su negocio desee llegar.",
            /*UL-1 */
            li1Item1: "Asesoramiento en la personalización de las redes sociales según su marca.",
            li1Item2: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales.",
            /*UL-1 */
            /*UL-2 */
            li2Item1: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok)",
            li2Item2: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2Item3: "4 Publicaciones en imagen tipo slide (Máximo 10 imagenes).",
            li2Item4: "8 Historias (imagen y video).",
            li2Item5: "4 Social video para reel o tiktok.",
            /*UL-2 */
            /*UL-3 */
            li3Item1: "Formato optimizado para Facebook e Instagram",
            li3Item2: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            li3Item3: "Coaching de comunicación visual para la ponencia online e impresos.",
            li3Item4: "Asesoramiento general para pautas en redes sociales.",
            /*UL-3 */
            oldPrice: "$5,800.00 + IVA * Mes",
            newPrice: "$3,780.00 + IVA * Mes"
            /* Pa' queten bien informados */
        },
        {
            /* Pa' quete encuentren siempre */
            paquete: "Pa' quete encuentren siempre",
            subtitle: "Ante la duda una solución",
            proposito: "Mejorar la experiencia de sus usuarios y lograr un mayor alcance, con un máximo nivel de exposición posible para cumplir satisfactoriamente las necesidades de su nicho; conservando la autenticidad y personalidad de su marca, a través de un lanzamiento activo en redes sociales e implementación de su página web.",
            /*UL-1 */
            li1Item1: "Implantación de soluciones digitales (Redes sociales y Pagina Web).",
            li1Item2: "Asesoramiento en la personalización de las distribución digital de su marca.",
            li1Item3: "Acompañamiento en el proceso de implementación en las campañas publicitarias en redes sociales",
            /*UL-1 */
            /*UL-2 */
            li2Item1: " Desarrollo y diseño de su página Web.",
            li2Item2: "Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).",
            li2Item3: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2Item4: "3 Publicaciones en imagen.",
            li2Item5: "8 Publicaciones en imagen tipo slide (Máximo 10 imagenes).",
            li2Item6: "12 Historias (imagen y video).",
            li2Item7: "4 Social video para reel o tiktok.",
            /*UL-2 */
            /*UL-3 */
            li3Item1: "Formato optimizado para Facebook e Instagram.",
            li3Item2: "Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.",
            li3Item3: "Gestión, asesoria y el mantenimiento de la página Web.",
            li3Item4: "Asesoramiento general para pautas en redes sociales.",
            li3Item5: "Coaching de comunicación visual para la ponencia online e impresos.",
            /*UL-3 */
            oldPrice: "$26,950.00 + IVA * Mes",
            newPrice: "$15,950.00 + IVA * Mes"
            /* Pa' quete encuentren siempre */
        },
        {
            /* Pa' que economices */
            paquete: "Pa' que economices",
            subtitle: "Inicia tu presencia en redes sociales y crece tu negocio",
            proposito: "Porque sabemos que vas empezando, pero el diseño no es lo tuyo o no tienes tiempo de crear contenido, con esto buscamos crear diseños atractivos y funcionales que le den el toque profesional a las redes sociales de tu negocio",
            /*UL-1 */
            li1Item1: "Personalizar tus redes en base a tu marca.",
            li1Item2: "Mejorar la calidad visual del contenido de tus redes sociales.",
            /*UL-1 */
            /*UL-2 */
            li2Item1: "Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).",
            li2Item2: "12 Publicaciones en imagen.",
            li2Item3: " 4 Publicaciones en imagen tipo slide (Máximo 5 imagenes).",
            li2Item4: "4 Social video para reel o tiktok.",
            /*UL-2 */
            /*UL-3 */
            li3Item1: "Formato optimizado para Facebook e Instagram.",
            li3Item2: "Entrega de archivos finales en .Png por correo.",
            li3Item3: "Entrega de video .Mp4 por correo.",
            li3Item4: "Uso de imágenes de stock y/ las proporcionadas por el cliente.",
            li3Item5: "Se entregara un total de 20 publicaciones que podrá subir usted mismo a sus redes sociales y estados.",
            /*UL-3 */
            oldPrice: "$5,250.00 + IVA * Mes",
            newPrice: "$2,625.00 + IVA * Mes"
            /* Pa' que economices */
        }
    ];

    return (
        <>
            {list.map((item, index) => (
                <div className="p-5 container mx-auto px-8">
                    {/* HEADER */}
                    <div className="text-center">
                        <h2 className="Light-Green-Lalaween">{item.paquete}</h2>
                        <h3> {item.subtitle} </h3>
                    </div>
                    {/* HEADER */}
                    {/* PROPOSITO */}
                    <div className="mt-5">
                        <div className="mt-5"><h4 className="Light-Green-Lalaween">Proposito</h4></div>
                        <div className="mt-5 text-justify"><p>{item.proposito}</p></div>
                    </div>
                    {/* PROPOSITO */}
                    {/* QUE IMPLICA */}
                    <div className="mt-5">
                        <div className="mt-5">
                            <h4 className="Light-Green-Lalaween">¿Que implica?</h4>
                        </div>
                        {/* UL-1 */}
                        <div className="mt-5">
                            <ul className="list-disc list-inside">
                                <li>{item.li1Item1}</li>
                                <li>{item.li1Item2}</li>
                                <li>{item.li1Item3}</li>
                            </ul>
                        </div>
                    </div>
                    {/* UL-1 */}
                    {/* QUE IMPLICA */}
                    {/* QUE SERVICIOS IMVLUYE */}
                    <div className="mt-5">
                        <div className="mt-5">
                            <h4 className="Light-Green-Lalaween">¿Que servicios incluye?</h4>
                        </div>
                        {/* UL-2 */}
                        <div className="mt-5">
                            <ul className="list-disc list-inside">
                                <li>{item.li2Item1}</li>
                                <li>{item.li2Item2}</li>
                                <li>{item.li2Item3}</li>
                                <li>{item.li2Item4}</li>
                                <li>{item.li2Item5}</li>
                                <li>{item.li2Item6}</li>
                                <li>{item.li2Item7}</li>
                                <li>{item.li2Item8}</li>
                                <li>{item.li2Item9}</li>
                            </ul>
                        </div>
                    </div>
                    {/* UL-2 */}
                    {/* QUE SERVICIOS IMVLUYE */}
                    {/* ¿QUE BENEFICIOS INCLUYE? */}
                    <div className="mt-5">
                        <div className="mt-5">
                            <h4 className="Light-Green-Lalaween">¿QUE BENEFICIOS INCLUYE?</h4>
                            {/* UL-3 */}
                            <div className="mt-5">
                                <ul className="list-disc list-inside">
                                    <li>{item.li3Item1}</li>
                                    <li>{item.li3Item2}</li>
                                    <li>{item.li3Item3}</li>
                                    <li>{item.li3Item4}</li>
                                    <li>{item.li3Item5}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* UL-3 */}
                    {/* ¿QUE BENEFICIOS INCLUYE? */}
                    {/* PRECIOS */}
                    <div className="mt-10 text-center">
                        <p className="font-semibold"> COSTO REAL </p>
                        <p className="line-through"> {item.oldPrice} </p>
                        <p className="font-semibold"> COSTO PROMOCIONAL </p>
                        <p className="font-bold Light-Green-Lalaween"> {item.newPrice} </p>
                    </div>
                    {/* PRECIOS */}
                </div>
            ))}
        </>
    );
}
