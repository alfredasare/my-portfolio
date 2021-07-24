import React, {useEffect} from "react";
import { gsap, Power4 } from "gsap"
import { ProjectListContainer, ProjectListHead, SmallProjectListHead } from "./project-list.styles"
import ProjectItem from "../project-item/project-item.component"

const ProjectList = ({projectData}) => {


  useEffect(() => {

    gsap.from(".small-works-head", {
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".small-tech-head"
      },
      ease: Power4.easeInOut
    })

    gsap.from(".project-list-head", {
      duration: 1.2,
      opacity: 0,
      ease: Power4.easeInOut,
      scrollTrigger: {
        trigger: ".project-list-head"
      },
    })
  },[]);

  return (
    <ProjectListContainer id="projects">
      <SmallProjectListHead className="small-works-head">
        Works
      </SmallProjectListHead>
      <ProjectListHead className="project-list-head">
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