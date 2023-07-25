import "./sectionProjects.css";
import ProjectCard from "./subComponents/ProjectCard";
import projects from "./utils";

const SectionProjects = () => {
  return (
    <div>
      <h1 className="title-project">Mis proyectos</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "3vh",
        }}
      >
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default SectionProjects;
