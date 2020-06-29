import React from "react";
import { ProjectListContainer, ProjectListHead } from "./project-list.styles"
import ProjectItem from "../project-item/project-item.component"

const ProjectList = ({projectData}) => {

  return (
    <ProjectListContainer>
      <ProjectListHead>
        Projects
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