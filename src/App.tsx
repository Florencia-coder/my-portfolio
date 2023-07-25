import "./App.css";
import HeaderPage from "./components/headerPage/HeaderPage";
import PersonalCard from "./components/personalCard/PersonalCard";
import SectionProjects from "./components/sectionProjects/SectionProjects";
import SkillsCard from "./components/skillsCard/SkillsCard";
import {
  skillsFrontEnd,
  skillsBackEnd,
  skillsTools,
  skillsTesting,
} from "./components/utils";
import WorkExperienceCard from "./components/workExperienceCard/WorkExperienceCard";

const App = () => {
  return (
    <>
      <HeaderPage />
      <main className="App">
        <PersonalCard />
        {/* <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          margin: "5vh",
        }}
      >
        
        <div style={{ display: "grid", gridGap: "6vh" }}>
          <SkillsCard skills={skillsFrontEnd} title="Front end" />
          <SkillsCard skills={skillsTesting} title="Testing" />
          <SkillsCard skills={skillsBackEnd} title="Back end" />
          <SkillsCard skills={skillsTools} title="Tools" />
        </div>
        <WorkExperienceCard />
      </div>
      <SectionProjects /> */}
      </main>
    </>
  );
};

export default App;
