import React from "react";
import "./projectCard.css";

interface IProjectCard {
  img: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<IProjectCard> = ({ img, title, description }) => {
  return (
    <div className="container-project">
      <img
        src={img}
        alt="Img Recipes"
        style={{ width: "100%", borderRadius: "1vh" }}
      />
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
