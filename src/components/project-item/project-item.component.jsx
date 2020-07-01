import React, { useEffect } from "react"
import { gsap, Power4 } from "gsap"
import {
  ProjectCategory, ProjectCategoryWrapper,
  ProjectHead, ProjectImage,
  ProjectImageContainer,
  ProjectInfo, ProjectInfoParagraph,
  ProjectItemContainer, ViewSiteLink, ViewSiteLinkContainer
} from "./project-item.styles"

const ProjectItem = ({index, projectName, projectCategory, projectInfo, projectUrl, bgColor, fontColor, img, linkBg, linkColor}) => {

  useEffect(() => {
    // gsap.from(".project-info", {
    //   duration: 1.2,
    //   opacity: 0,
    //   ease: Power4.easeInOut,
    //   scrollTrigger: {
    //     trigger: ".project-info",
    //     toggleActions: "restart none restart none"
    //   },
    // });
  }, []);

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