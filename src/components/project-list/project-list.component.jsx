import React from "react";
import { ProjectListContainer, ProjectListHead } from "./project-list.styles"
import ProjectItem from "../project-item/project-item.component"

const ProjectList = () => {
  return (
    <ProjectListContainer>
      <ProjectListHead>
        Projects
      </ProjectListHead>
      <ProjectItem />
    </ProjectListContainer>
  );
};

export default ProjectList;