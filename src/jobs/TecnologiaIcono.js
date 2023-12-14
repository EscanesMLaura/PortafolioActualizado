import React from 'react';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { IoLogoCss3 } from "react-icons/io";
import { SiRedux } from "react-icons/si";
import "../style/listadoTrabajo.css";

const TecnologiaIcono = ({ tecnologia }) => {
  const iconos = {
    HTML: <FaHtml5 />,
    CSS: <IoLogoCss3 />,
    JavaScript: <FaJs />,
    React: <FaReact />,
    Redux: <SiRedux />,
    // Agrega más tecnologías según sea necesario
  };

  return (
    <span
      className={`tecnologia-icon`}
      id={`icon-${tecnologia}`}
      data-tecnologia={tecnologia}
    >
      {iconos[tecnologia]}
    </span>
  );
};

export default TecnologiaIcono;


