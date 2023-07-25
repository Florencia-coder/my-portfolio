import React from "react";
import "./skillsCard.css";
import IconCard from "./iconCard/IconCard";

interface ISkillsCard {
  skills: { img: string; title: string }[];
  title: string;
}

const SkillsCard: React.FC<ISkillsCard> = ({ skills, title }) => {
  return (
    <div className="skill-card">
      <h1 className="title-skill">{title}</h1>
      <div className="container-skills">
        {skills?.map((el, i) => {
          return <IconCard key={i} img={el.img} title={el.title} />;
        })}
      </div>
    </div>
  );
};

export default SkillsCard;
