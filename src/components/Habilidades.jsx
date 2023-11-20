import React, { useEffect } from 'react';
import "../style/habilidades.css";

export const Habilidades = () => {

    useEffect(() => {
        const images = document.querySelectorAll('.image');
        images.forEach(image => {
            image.classList.add('animated-image');
        });

        return () => {
            images.forEach(image => {
                image.classList.remove('animated-image');
            });
        };
    }, []);


    return (
        <div className="pagina">
            <br />
            <h1 className="tituloSkills">FrontEnd</h1>

            <img src="/images/imghtml.png" className="image" alt='imagen' />
            <img src="/images/imgcss.png" className="image" alt='imagen' />
            <img src="/images/imgsass.png" className="image" alt='imagen' />
            <img src="/images/imgjs.png" className="image" alt='imagen' />
            <img src="images/imgts.png" className="image" alt='imagen' />
            <img src="/images/imgreact.png" className="image" alt='imagen' />
            <img src="/images/imgmaterialui.png" className="image" alt='imagen' />
            <img src="/images/imgapi.png" className="image" alt='imagen' />
            <br />
            <br />
            <br />
            <h1 className="tituloSkills">Editor, Herramientas, Etc..</h1>

            <img src="/images/imgvsc.png" className="image" alt='imagen' />
            <img src="/images/imggit.png" className="image" alt='imagen' />
            <img src="/images/imggithub.png" className="image" alt='imagen' />
            <img src="/images/imggithubd.png" className="image" alt='imagen' />
            <img src="/images/imgpostman.png" className="image" alt='imagen' />
            <img src="/images/imgjira.png" className="image" alt='imagen' />
            <img src="/images/imgfigma.png" className="image" alt='imagen' />
            <img src="/images/imgscrum.png" className="image" alt='imagen' />
            <br />
            <br />
        </div>

    );
};

