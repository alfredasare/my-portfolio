import React from "react"
import {
  ProjectCategory, ProjectCategoryWrapper,
  ProjectHead,
  ProjectImageContainer,
  ProjectInfo, ProjectInfoParagraph,
  ProjectItemContainer
} from "./project-item.styles"

const ProjectItem = () => {
  return (
    <ProjectItemContainer>
      <ProjectInfo>
        <ProjectCategoryWrapper>
          <ProjectCategory>
            E-housing
          </ProjectCategory>
        </ProjectCategoryWrapper>
        <ProjectHead>
          Edanra
        </ProjectHead>
        <ProjectInfoParagraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius fugit illum laboriosam magnam quae,
          quis? Aliquid corporis cupiditate delectus itaque sapiente sint temporibus unde. Cum dolores esse sit
          veritatis!
        </ProjectInfoParagraph>
      </ProjectInfo>
      <ProjectImageContainer></ProjectImageContainer>
    </ProjectItemContainer>
  )
}

export default ProjectItem