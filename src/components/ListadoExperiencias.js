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
                                    <h2>{experiencia.nombre}</h2>
                                    <p>{experiencia.duracion}</p>
                                </div>
                                <br />

                                <div className='tarjeta-contenido'>
                                    <div className='info-personal desplazar'>

                                        {experiencia.puestos.map((puesto, index) => (
                                            <div key={index}>
                                                <h2 style={{ color: puesto.color }}>{puesto.nombre}</h2>
                                                <p style={{ color: puesto.color }}>{puesto.fecha}</p>
                                                <h5>{puesto.jornada}</h5>
                                                <ul>
                                                    {puesto.tareas.map((tarea, tareaIndex) => (
                                                        <p key={tareaIndex} style={{ textAlign: 'left' }}>{tarea}</p>
                                                    ))}
                                                </ul>
                                                <br />
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





