import React from "react";
import "./iconCard.css";

interface IIconCard {
  img: string;
  title: string;
}

const IconCard: React.FC<IIconCard> = ({ img, title }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={img} alt="Avatar" className="image" />
        </div>
        <div className="flip-card-back">
          <h1 className="title">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default IconCard;
