import React from 'react';
import "../style/inicio.css";


export const Inicio = () => {
  return (
    <div className="inicioContainer">
      <div className="inicio">
        <img src="/images/fotocv3.png" className="imgRedonda" alt='imagen'/>
      </div>

      <div className="contenido">
        <br />
        <h1>
          <strong>María Laura Escanes</strong>
        </h1>

        <h2>
          Desarrolladora FrontEnd
          <br />
          enfocada en React,
          <br />
          autodidacta, en continuo aprendizaje.
        </h2>

        <div className="buttonContainer">
          <a href="mailto:escanesmarialaura@gmail.com?subject=Correo enviado desde tu Portafolio&body=Me interesa contactarme con vos" target="_blank" rel="noreferrer">
            <button className="buttonContactame">Contactame</button>
          </a>
          <a href="./CV María Laura Escanes.pdf" target="_blank" rel="noreferrer">
            <button className="buttonDownload">Descargar CV</button>
          </a>
        </div>

        <div className="iconosInicio">
          <a href="https://github.com/EscanesMLaura" target="_blank" rel="noreferrer"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://linkedin.com/in/escanesmarialaura" target="_blank" rel="noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
          <a href="https://wa.me/543512543099" target="_blank" rel="noreferrer"><ion-icon name="logo-whatsapp"></ion-icon></a>
        </div>
      </div>
    </div>
  );
};
