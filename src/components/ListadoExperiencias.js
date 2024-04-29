import React, { useEffect } from 'react';
import { experiencias } from '../jobs/experiencias';
import "../style/listadoExperiencia.css";

export const ListadoExperiencias = ({ limite }) => {

    useEffect(() => {
        const tarjetas = document.querySelectorAll('.tarjeta');
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.add('animated-tarjeta');
        });

        return () => {
            tarjetas.forEach(tarjeta => {
                tarjeta.classList.remove('animated-tarjeta');
            });
        };
    }, []);

    const handleImageClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <>
            <section className="proyectos">
                {experiencias.slice(0, limite).map((experiencia) => {
                    return (
                        <article key={experiencia.id} className="contenedor">
                            <div className='tarjeta'>
                                <div className='tarjeta-encabezado' onClick={() => handleImageClick(experiencia.url)}>
                                    <img src={"/images/" + experiencia.id + ".jpg"} alt='imagen' />
                                </div>
                                <br />

                                <div className='tarjeta-contenido'>
                                    <div className='info-personal desplazar'>
                                        <h2>{experiencia.nombre}</h2>
                                        {experiencia.puestos.map((puesto, index) => (
                                            <div key={index}>
                                                <h3>{puesto.nombre}</h3>
                                                <p><strong>Tareas:</strong></p>
                                                <ul>
                                                    {puesto.tareas.map((tarea, tareaIndex) => (
                                                        <li key={tareaIndex}>{tarea}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </article>
                    );
                })}
            </section>
        </>
    );
};





