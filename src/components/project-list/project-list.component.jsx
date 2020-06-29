import React from "react";
import { ProjectListContainer, ProjectListHead, SmallProjectListHead } from "./project-list.styles"
import ProjectItem from "../project-item/project-item.component"

const ProjectList = ({projectData}) => {

  return (
    <ProjectListContainer id="projects">
      <SmallProjectListHead>
        Works
      </SmallProjectListHead>
      <ProjectListHead>
        Projects I've worked on
      </ProjectListHead>
      {
        projectData.map((project, index) => {
          return <ProjectItem index={index} key={project.id} {...project}/>
        })
      }
    </ProjectListContainer>
  );
};

export default ProjectList;