import React from "react";
import "./itemWorkCard.css";

interface IItemWorkCard {
  start: string;
  end: string;
  position: string;
  description: string;
  link: string;
  logoWork: string;
}

const ItemWorkCard: React.FC<IItemWorkCard> = ({
  start,
  end,
  position,
  description,
  logoWork,
  link,
}) => {
  return (
    <div className="container-work">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={logoWork} alt="logo-work" className="img" />
      </a>
      <div className="container-text">
        <h5 className="position-work">{position}</h5>
        <p className="time">
          {start} - {end}
        </p>
        <p className="description">{description} </p>
      </div>
    </div>
  );
};

export default ItemWorkCard;
