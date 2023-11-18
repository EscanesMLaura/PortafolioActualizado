import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Footer } from '../components/layout/Footer';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Curriculum } from '../components/Curriculum';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Habilidades } from '../components/Habilidades';



export const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
      <HeaderNav /> 

      {/* CONTENIDO CENTRAL */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/habilidades" element={<Habilidades />} />
         {/* <Route path="/curriculum" element={<Curriculum />} />  */}
          <Route path="*" element={
            <div className="pagina">
              <h1 className="heading">Error 404</h1>
            </div>
          } />
        </Routes>
          
      </section>
      
      
      {/* FOOTER 
      <Footer />*/}

    </BrowserRouter>
  )
}
  