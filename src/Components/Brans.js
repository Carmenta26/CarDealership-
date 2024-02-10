import React from 'react';


const Banner = () => {
    return (
        <div className="banner-brands">
            <img
                className="brand"
                src={require('../images/audi.png')} // Ruta de la primera imagen
                alt="Brand 1"
            />
            <img
                className="brand-large"
                src={require('../images/chevrolet.png')} // Ruta de la segunda imagen
                alt="Brand 2"
            />
            <img
                className="brand"
                src={require('../images/ford.png')} // Ruta de la tercera imagen
                alt="Brand 3"
            />
            <img
                className="brand-small"
                src={require('../images/bmw.png')} // Ruta de la cuarta imagen
                alt="Brand 4"
            />
            <img
                className="brand-small"
                src={require('../images/mercedes.png')} // Ruta de la quinta imagen
                alt="Brand 5"
            />
            <img
                className="brand"
                src={require('../images/honda.png')} // Ruta de la sexta imagen
                alt="Brand 6"
            />
        </div>
    );
};

export default Banner;
