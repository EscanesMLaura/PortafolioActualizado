import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../style/headerNav.css";


export const HeaderNav = () => {
    return (
        <header className="header">

            <nav>
                <ul>
                    <li>
                        <NavLink to="/inicio" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/habilidades" className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/portafolio" className={({ isActive }) => isActive ? "active" : ""}>Portafolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/experiencia" className={({ isActive }) => isActive ? "active" : ""}>Experiencia</NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}
