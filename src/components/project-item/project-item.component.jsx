import React from "react"
import { ProjectImageContainer, ProjectInfo, ProjectItemContainer } from "./project-item.styles"

const ProjectItem = () => {
  return (
    <ProjectItemContainer>
      <ProjectInfo></ProjectInfo>
      <ProjectImageContainer></ProjectImageContainer>
    </ProjectItemContainer>
  );
};

export default ProjectItem;