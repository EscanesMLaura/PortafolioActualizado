import React, { useEffect } from 'react'
import { experiencias } from '../jobs/experiencias';
import "../style/listadoTrabajo.css";
import TecnologiaIcono from '../jobs/TecnologiaIcono';

export const ListadoExperiencias = ({ limite }) => {

    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('animated-card');
        });

        return () => {
            cards.forEach(card => {
                card.classList.remove('animated-card');
            });
        };
    }, []);

    return (
        <>
            <section className="proyectos">
                {experiencias.slice(0, limite).map((experiencia) => {
                    const tecnologiasArray = experiencia.tecnologias.split(' - ');

                    return (
                        <article key={experiencia.id} className="contenedor">
                            <div className='card'>

                                <div className='card-encabezado'>
                                    <img src={"/images/" + experiencia.id + ".jpg"} alt='imagen' />
                                </div>
                                <br />

                                <div className='card-iconos'>
                                    <li className='agrandar'><a href={experiencia.url} target="_blank" rel="noreferrer"><ion-icon name="desktop-outline"></ion-icon></a></li>
                                    <li className='agrandar'><a href={experiencia.codigo} target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a></li>
                                </div>

                                <div className='card-contenido'>

                                    <div className='info-personal desplazar'>
                                        <h2>{experiencia.nombre}</h2>
                                        <br />
                                        <div className="tecnologias-container">
                                            {tecnologiasArray.map((tecnologia, index) => (
                                                <TecnologiaIcono key={index} tecnologia={tecnologia} />
                                            ))}
                                        </div>
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









