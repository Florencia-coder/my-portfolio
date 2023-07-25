import React from "react";
import "./personalCard.css";
import photoPerfil from "../../assets/photo-perfil.jpg";

const PersonalCard = () => {
  return (
    <section className="container-main">
      <h2 className="title-profile">Florencia Flandes</h2>
      <h3 id="sub-title">Desarrolladora Front-End Junior</h3>
      <img src={photoPerfil} id="image" alt="Perfil" />
      <p className="personal-description">
        Me apasiona el mundo de la programación y siempre estoy en busca
        constante de aprendizaje. Me dedico a crear páginas web para demostrar y
        aplicar mis conocimientos.
      </p>
    </section>
  );
};

export default PersonalCard;
