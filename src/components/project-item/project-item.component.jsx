import React from "react"
import {
  ProjectCategory, ProjectCategoryWrapper,
  ProjectHead, ProjectImage,
  ProjectImageContainer,
  ProjectInfo, ProjectInfoParagraph,
  ProjectItemContainer, ViewSiteLink, ViewSiteLinkContainer
} from "./project-item.styles"

const ProjectItem = ({id, index, projectName, projectCategory, projectInfo, projectUrl, bgColor, fontColor, img, linkBg, linkColor}) => {
  return (
    <ProjectItemContainer index={index}>
      <ProjectInfo bgColor={bgColor} fontColor={fontColor}>
        <ProjectCategoryWrapper>
          <ProjectCategory>
            {projectCategory}
          </ProjectCategory>
        </ProjectCategoryWrapper>
        <ProjectHead>
          {projectName}
        </ProjectHead>
        <ProjectInfoParagraph>
          {projectInfo}
        </ProjectInfoParagraph>
        <ViewSiteLinkContainer>
          <ViewSiteLink href={projectUrl} target="_blank" linkBg={linkBg} linkColor={linkColor}>
            Visit Website
          </ViewSiteLink>
        </ViewSiteLinkContainer>
      </ProjectInfo>
      <ProjectImageContainer>
        <ProjectImage fluid={img}/>
      </ProjectImageContainer>
    </ProjectItemContainer>
  )
}

export default ProjectItem