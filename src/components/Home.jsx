import React from 'react';

export const Home = () => {
    return (
        <div className="container-home">
            <div className="video-container">
                <video autoPlay controls>
                    <source src="https://www.youtube.com/embed/EvhQ_jkeWLg" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <h2 className="titulo">¿Y tú, ya encontraste tu gamer interior?</h2>
            <h2>¡Contamos con artículos gamer de la mejor calidad!</h2>
            <p>La tecnología y el emprendimiento han transformado la manera en que las familias interactúan y experimentan el crecimiento tanto personal como profesional. Hoy en día, la conexión virtual se ha convertido en una parte fundamental de nuestras vidas. Uno de los aspectos más destacados de esta interconexión tecnológica es la capacidad de emprender proyectos familiares a través de plataformas digitales. El emprendimiento familiar se ha convertido en una oportunidad de crecimiento tanto económico como personal. Y así nació nuestro proyecto Punto Lan Computación ya que los dos somos amantes de la tecnología y de estar conectados. Ariel por un lado encuentra que desarmar y arreglar. Camila en cambio estudia programación y en su tiempo libre le encanta los juegos, más que nada los shooters.</p>
        </div>
    );
};

