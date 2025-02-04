import React from "react";
import Zoom from 'react-reveal/Zoom';
import ProjectCard from "./ProjectCard/ProjectCard";
function Projects() {
  return (
    <>
      
      <div className="ProjectWrapper " id="projects">

        <div className="Container">
        <Zoom bottom >
          <div className="SectionTitle">Projects</div>
        </Zoom>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default Projects;
