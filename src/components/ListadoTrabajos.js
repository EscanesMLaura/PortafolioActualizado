import React from 'react'
import { trabajos } from '../jobs/trabajos';
import "../style/listadoTrabajo.css";


export const ListadoTrabajos = ({ limite }) => {
  return (
    <>
      <section className="proyectos">
        {trabajos.slice(0, limite).map((trabajo) => {
          return (
            <article key={trabajo.id} className="contenedor">
              <div className='card'>

                <div className='card-encabezado'>
                  <img src={"/images/" + trabajo.id + ".jpg"} />
                </div>
                <br />

                <div className='card-iconos'>
                  <li className='agrandar'><a href={trabajo.url} target="_blank"><ion-icon name="desktop-outline"></ion-icon></a></li>
                  <li className='agrandar'><a href={trabajo.codigo} target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
                </div>

                <div className='card-contenido'>
                  <div className='info-personal desplazar'><h2>{trabajo.nombre}</h2></div>
                  <br />
                  <div className='info-personal desplazar'><em>{trabajo.tecnologias}</em></div>
                </div>

              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};









