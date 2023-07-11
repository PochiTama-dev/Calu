import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about_container">
      <div className="about_items">
        <div>
          <h1 className="title_about">¿QUIENES SOMOS?</h1>
        </div>
        <div>
          <h2 className="sub_1">SOMOS UN EQUIPO</h2>
          <h2 className="sub_2">APASIONADO POR LA TRANSFORMACION DIGITAL</h2>
        </div>
        <div>
          <p>
            Compartimos la pasión por nuestro trabajo y la ilusión por cambiar
            el mundo emprendedor.
          </p>
          <p>
            Potenciamos la identidad digital de tu marca acompañándote en el
            proceso, escuchándote y aconsejándote para que tu experiencia y la
            de tu público sea única.
          </p>
        </div>
        <div>
          <p className="text_last">
            !DESDE EL MOMENTO CERO NOS COMPROMETEMOS CON TU PROPÓSITO!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
