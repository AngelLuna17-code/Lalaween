import React from "react";

export default function App() {
    const list = [
        {
            newPrice: "$6,250.00 + IVA * Mes",
            oldPrice: "$3,125.00 + IVA * Mes"
        }
    ];

    return (
        <>
            {list.map((item, index) => (
                <div className="p-5 container mx-auto px-8">
                    {/* HEADER */}
                    <div className="text-center">
                        <h2 className="Light-Green-Lalaween">Pa' quete des a conocer</h2>
                        <h3>Inicia tu presencia en redes sociales y crece tu negocio</h3>
                    </div>
                    {/* HEADER */}
                    {/* PROPOSITO */}
                    <div className="mt-5">
                        <div className="mt-5"><h4 className="Light-Green-Lalaween">Proposito</h4></div>
                        <div className="mt-5 text-justify"><p>Diseñar, generar y ejecutar las bases para comenzar a promocionar tus servicios y/o productos en el
                            mercado, estudiando y planteando estrategias según el análisis obtenido en redes sociales, dando a
                            conocer y dejando al alcance de todos la comunicación directa y fluida con tu negocio en el mundo
                            digital.</p></div>
                    </div>
                    {/* PROPOSITO */}
                    {/* QUE IMPLICA */}
                    <div className="mt-5">
                        <div className="mt-5">
                            <h4 className="Light-Green-Lalaween">¿Que implica?</h4>
                        </div>
                        <div className="mt-5">
                            <ul className="list-disc list-inside">
                                <li>Asesoramiento en la personalización de las redes sociales según su marca</li>
                                <li>Acompañamiento en el proceso de implementación en las campañas
                                    publicitarias en redes sociales.</li>
                            </ul>
                        </div>
                    </div>
                    {/* QUE IMPLICA */}
                    {/* QUE SERVICIOS IMVLUYE */}
                    <div className="mt-5">
                        <h4 className="Light-Green-Lalaween">¿Que servicios incluye?</h4>
                    </div>
                    {/* QUE SERVICIOS IMVLUYE */}
                    {/* Pa’ que le empieces */}
                    <div className="grid grid-cols-2 mt-5">
                        <div>
                            <div className="mt-5">
                                <h4 className="Light-Green-Lalaween">Pa’ que le empieces</h4>
                            </div>
                            <ul className="list-disc list-inside mt-5">
                                <li>Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).</li>
                                <li>Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).</li>
                                <li>12 Publicaciones en imagen.</li>
                                <li>8 Historias (imagen y video).</li>
                                <li>1 Social video para reel o tiktok.</li>
                            </ul>
                        </div>
                        {/* PRECIOS */}
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                <p className="font-semibold"> COSTO REAL </p>
                                <p className="line-through"> {item.oldPrice} </p>
                                <p className="font-semibold"> COSTO PROMOCIONAL </p>
                                <p className="font-bold Light-Green-Lalaween"> {item.newPrice} </p>
                            </div>
                        </div>
                        {/* PRECIOS */}
                    </div>
                    {/* Pa’ que le empieces */}
                    {/* Pa’ que te quieran */}
                    <div className="grid grid-cols-2 mt-5">
                        <div>
                            <div className="mt-5">
                                <h4 className="Light-Green-Lalaween">Pa’ que te quieran</h4>
                            </div>
                            <ul className="list-disc list-inside mt-5">
                                <li>Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).</li>
                                <li>Diseño de plantillas para redes sociales(Portada, Perfil y Publicaciones).</li>
                                <li>20 Publicaciones en imagen.</li>
                                <li>2 Publicaciones en imagen tipo slide (Máximo 10 imagenes).</li>
                                <li>4 Historias (imagen y video).</li>
                                <li>2 Social video para reel o tiktok</li>
                            </ul>
                        </div>
                        {/* PRECIOS */}
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                <p className="font-semibold"> COSTO REAL </p>
                                <p className="line-through"> {item.oldPrice} </p>
                                <p className="font-semibold"> COSTO PROMOCIONAL </p>
                                <p className="font-bold Light-Green-Lalaween"> {item.newPrice} </p>
                            </div>
                        </div>
                        {/* PRECIOS */}
                    </div>
                    {/* Pa’ que te quieran */}
                    {/* Pa’ que sueñen */}
                    <div className="grid grid-cols-2 mt-5">
                        <div>
                            <div className="mt-5">
                                <h4 className="Light-Green-Lalaween">Pa’ que sueñen</h4>
                            </div>
                            <ul className="list-disc list-inside mt-5">
                                <li>Creación de cuentas para la marca en redes sociales (Facebook, Instagram y/o Tiktok).</li>
                                <li>Diseño de plantillas para redes sociales (Portada, Perfil y Publicaciones).</li>
                                <li>28 Publicaciones en imagen.</li>
                                <li>28 Historias (imagen y video).</li>
                                <li>4 Social video para reel o tiktok.</li>
                            </ul>
                        </div>
                        {/* PRECIOS */}
                        <div className="flex items-center justify-center">
                            <div className="text-center">
                                <p className="font-semibold"> COSTO REAL </p>
                                <p className="line-through"> {item.oldPrice} </p>
                                <p className="font-semibold"> COSTO PROMOCIONAL </p>
                                <p className="font-bold Light-Green-Lalaween"> {item.newPrice} </p>
                            </div>
                        </div>
                        {/* PRECIOS */}
                    </div>
                    {/* Pa’ que sueñen */}
                    {/* ¿Qué beneficios incluyen? */}
                    <div>
                        <div>
                            <h4 className="Light-Green-Lalaween">¿Qué beneficios incluyen?</h4>
                        </div>
                        <div>
                            <ul className="list-disc list-inside">
                                <li>Formato optimizado para Facebook e Instagram.</li>
                                <li>Uso de imágenes de stock y/o proporcionadas por el cliente.</li>
                                <li>Publicación del contenido trabajado para redes y administración de redes sociales durante un mes.</li>
                            </ul>
                        </div>
                    </div>
                    {/* ¿Qué beneficios incluyen? */}
                </div>
            ))}
        </>
    );
}
