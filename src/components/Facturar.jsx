import React from 'react';

const Facturar = () => {
    return (
        <div>
            <div className="text-white px-[15px]  w-full sm:w-[60%] lg:w-[40%] mx-auto py-[25px] px-[25px] rounded-[15px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <form action="procesar_factura.php" method="post">
                    {/* Nombre ó Razón Social */}
                    <div>
                        <label for="">Nombre ó Razón Social *</label>
                        <br />
                        <input className="w-full font-black text-black" type="text" id="" name="" required />
                    </div>
                    {/* Nombre ó Razón Social */}
                    {/* RFC */}
                    <div className="mt-3">
                        <label for="">RFc</label>
                        <br />
                        <input className="w-full font-black text-black" type="text" id="" name="" required />
                    </div>
                    {/* RFC */}
                    {/* UsoCFDI* */}
                    <div className="mt-3">
                        <label for="">UsoCFDI*</label>
                        <br />
                        <select name="?" size="1" className="w-full font-black text-black" >
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                            <option value="">6</option>
                        </select>
                    </div>
                    {/* UsoCFDI* */}
                    {/* Regimen Fiscal */}
                    <div className="mt-3">
                        <label for="">Régimen Fiscal*</label>
                        <br />
                        <select name="?" size="1" className="w-full font-black text-black">
                            <option value="">601 General de Ley Personas Morales</option>
                            <option value="">603 Personas Morales con Fines no Lucrativos</option>
                            <option value="">605 Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
                            <option value="">606 Arrendamiento</option>
                            <option value="">607 Régimen de Enajenación o Adquisición de Bienes</option>
                            <option value="">608 Demás ingresos</option>
                            <option value="">609 Consolidación</option>
                            <option value="">610 Residentes en el Extranjero sin Establecimiento Permanente en México</option>
                            <option value="">611 Ingresos por Dividendos (socios y accionistas)</option>
                            <option value="">612 Personas Físicas con Actividades Empresariales y Profesionales</option>
                            <option value="">614 Ingresos por intereses</option>
                            <option value="">615 Régimen de los ingresos por obtención de premios</option>
                            <option value="">616 Sin obligaciones fiscales</option>
                            <option value="">620 Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
                            <option value="">621 Incorporación Fiscal</option>
                            <option value="">622 Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
                            <option value="">623 Opcional para Grupos de Sociedades</option>
                            <option value="">624 Coordinados</option>
                            <option value="">625 Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                            <option value="">626 Régimen Simplificado de Confianza</option>
                            <option value="">628 Hidrocarburos</option>
                            <option value="">629 De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales</option>
                            <option value="">630 Enajenación de acciones en bolsa de valores</option>
                        </select>
                    </div>
                    {/* Regimen Fiscal */}
                    {/* Correo Electronico */}
                    <div className="mt-3">
                        <label for="">Correo Electrónico</label>
                        <br />
                        <input className="w-full font-black text-black" type="text" id="" name="" required />
                    </div>
                    {/* Correo Electronico */}
                    {/* Folio IEPS */}
                    <div className="mt-3">
                        <label for="">Folio IEPS "Opcional"</label>
                        <br />
                        <input className="w-full font-black text-black" type="text" id="" name="" required />
                    </div>
                    {/* Folio IEPS */}
                    {/* Codigo Postal */}
                    <div className="mt-3">
                        <label for="">Codigo Postal"</label>
                        <br />
                        <input className="w-full font-black text-black" type="text" id="" name="" required />
                    </div>
                    {/* Codigo Postal */}
                    <div className='mt-5 flex justify-center'>
                        <button className='bg-[#066a69] hover:bg-[#01a09a] px-[45px] py-[10px] font-black rounded-[15px]' type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Facturar;