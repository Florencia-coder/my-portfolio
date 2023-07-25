import { itemsExperiences } from "../utils.js";
import ItemWorkCard from "./subComponents/ItemWorkCard.tsx";
import "./workExperienceCard.css";

const WorkExperienceCard = () => {
  return (
    <div className="containerWork">
      <h1 className="title-work ">Experiencia</h1>
      {itemsExperiences.map((el, index) => {
        return <ItemWorkCard key={index} {...el} />;
      })}
    </div>
  );
};

export default WorkExperienceCard;
