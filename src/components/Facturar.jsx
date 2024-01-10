import React from 'react';

const Facturar = () => {
    return (
        <div className='px-[15px] sm:px-[0px]'>
            <div className="text-white px-[15px]  w-full sm:w-[60%] lg:w-[40%] mx-auto py-[25px] px-[25px] rounded-[15px]" style={{ background: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}>
                <form action="https://formsubmit.co/creativeteam@lalaween.com" method="POST">
                    {/* Nombre ó Razón Social */}
                    <div>
                        <label>Nombre ó Razón Social *
                            <input className="w-full font-black text-black typing" type="text" name="Nombre ó Razón Social" required />
                        </label>
                    </div>
                    {/* Nombre ó Razón Social */}
                    {/* RFC */}
                    <div className="mt-3">
                        <label>RFc
                            <input className="w-full font-black text-black typing" type="text" name="RFC" required />
                        </label>
                    </div>
                    {/* RFC */}
                    {/* Regimen Fiscal */}
                    <div className="mt-3">
                        <label>Régimen Fiscal*
                            <select name="Régimen Fiscal*" size="1" className="w-full font-black text-black typing">
                                <option value="601 General de Ley Personas Morales">601 General de Ley Personas Morales</option>
                                <option value="603 Personas Morales con Fines no Lucrativos">603 Personas Morales con Fines no Lucrativos</option>
                                <option value="605 Sueldos y Salarios e Ingresos Asimilados a Salarios">605 Sueldos y Salarios e Ingresos Asimilados a Salarios</option>
                                <option value="606 Arrendamiento">606 Arrendamiento</option>
                                <option value="607 Régimen de Enajenación o Adquisición de Bienes">607 Régimen de Enajenación o Adquisición de Bienes</option>
                                <option value="608 Demás ingresos">608 Demás ingresos</option>
                                <option value="609 Consolidación">609 Consolidación</option>
                                <option value="610 Residentes en el Extranjero sin Establecimiento Permanente en México">610 Residentes en el Extranjero sin Establecimiento Permanente en México</option>
                                <option value="611 Ingresos por Dividendos (socios y accionistas)<">611 Ingresos por Dividendos (socios y accionistas)</option>
                                <option value="612 Personas Físicas con Actividades Empresariales y Profesionales">612 Personas Físicas con Actividades Empresariales y Profesionales</option>
                                <option value="614 Ingresos por intereses">614 Ingresos por intereses</option>
                                <option value="615 Régimen de los ingresos por obtención de premios">615 Régimen de los ingresos por obtención de premios</option>
                                <option value="616 Sin obligaciones fiscales">616 Sin obligaciones fiscales</option>
                                <option value="620 Sociedades Cooperativas de Producción que optan por diferir sus ingresos">620 Sociedades Cooperativas de Producción que optan por diferir sus ingresos</option>
                                <option value="621 Incorporación Fiscal">621 Incorporación Fiscal</option>
                                <option value="622 Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras">622 Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras</option>
                                <option value="623 Opcional para Grupos de Sociedades">623 Opcional para Grupos de Sociedades</option>
                                <option value="624 Coordinado">624 Coordinados</option>
                                <option value="625 Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas">625 Régimen de las Actividades Empresariales con ingresos a través de Plataformas Tecnológicas</option>
                                <option value="626 Régimen Simplificado de Confianza">626 Régimen Simplificado de Confianza</option>
                                <option value="628 Hidrocarburos">628 Hidrocarburos</option>
                                <option value="629 De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales">629 De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales</option>
                                <option value="630 Enajenación de acciones en bolsa de valores">630 Enajenación de acciones en bolsa de valores</option>
                            </select>
                        </label>
                    </div>
                    {/* Regimen Fiscal */}
                    {/* UsoCFDI* */}
                    <div className="mt-3">
                        <label>UsoCFDI*
                            <select name="UsoCFDI" size="1" className="w-full font-black text-black typing" >
                                <option value="D04 Donativos">D04 Donativos</option>
                                <option value="G01 Adquisición de mercancías">G01 Adquisición de mercancías</option>
                                <option value="G03 Gastos en general">G03 Gastos en general</option>
                                <option value="I02 Mobiliario y equipo de oficina por inversiones">I02 Mobiliario y equipo de oficina por inversiones</option>
                                <option value="I04 Equipo de cómputo y accesorios">I04 Equipo de cómputo y accesorios</option>
                                <option value="I05 Dados, troqueles, moldes, matrices y herramental">I05 Dados, troqueles, moldes, matrices y herramental</option>
                                <option value="I06 Comunicaciones telefónicas">I06 Comunicaciones telefónicas</option>
                                <option value="I07 Comunicaciones satelitale">I07 Comunicaciones satelitales</option>
                                <option value="I08 Comunicaciones satelitales">I08 Comunicaciones satelitales</option>
                                <option value="I08 Otra maquinaria y equipo">I08 Otra maquinaria y equipo</option>
                                <option value="S01 Sin efectos fiscales">S01 Sin efectos fiscales</option>
                            </select>
                        </label>
                    </div>
                    {/* UsoCFDI* */}
                    {/* Correo Electronico */}
                    <div className="mt-3">
                        <label>Correo Electrónico
                            <input className="w-full font-black text-black typing" type="text" name="Correo Electrónico" required />
                        </label>
                    </div>
                    {/* Correo Electronico */}
                    {/* Folio IEPS */}
                    <div className="mt-3">
                        <label for="">Folio IEPS "Opcional"
                            <input className="w-full font-black text-black typing" type="text" name="Folio IEPS" />
                        </label>
                    </div>
                    {/* Folio IEPS */}
                    {/* Codigo Postal */}
                    <div className="mt-3">
                        <label>Codigo Postal
                            <input className="w-full font-black text-black typing" type="text" name="Codigo Postal" required />
                        </label>
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