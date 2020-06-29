import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectList from "./project-list.component"
import uuid from 'react-uuid'

const ProjectListContainer = () => {

  const data = useStaticQuery(graphql`
      query {
          ds: file(relativePath: { eq: "ds1.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          chop: file(relativePath: { eq: "chop2.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          edanra: file(relativePath: { eq: "edanra2.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          fr: file(relativePath: { eq: "fr2.png"}) {
              childImageSharp {
                  fluid(maxWidth: 1300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          wevops: file(relativePath: { eq: "wevops.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  const projectData = [
    {
      id: uuid(),
      projectName: "Wevops",
      projectCategory: "Portfolio",
      projectInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius fugit illum laboriosam magnam quae,
          quis? Aliquid corporis cupiditate delectus itaque sapiente sint temporibus unde. Cum dolores esse sit
          veritatis!`,
      projectUrl: "https://wevops-portfolio.netlify.app/",
      bgColor: "black",
      fontColor: "white",
      linkBg: "white",
      linkColor: "black",
      img: data.wevops.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "Edanra",
      projectCategory: "E-housing",
      projectInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius fugit illum laboriosam magnam quae,
          quis? Aliquid corporis cupiditate delectus itaque sapiente sint temporibus unde. Cum dolores esse sit
          veritatis!`,
      projectUrl: "https://www.edanra.com",
      bgColor: "#00695C",
      fontColor: "white",
      linkBg: "black",
      linkColor: "white",
      img: data.edanra.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "Design Studios",
      projectCategory: "Portfolio",
      projectInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius fugit illum laboriosam magnam quae,
          quis? Aliquid corporis cupiditate delectus itaque sapiente sint temporibus unde. Cum dolores esse sit
          veritatis!`,
      projectUrl: "https://drvmroll-design-portfolio.netlify.app/",
      bgColor: "#F2542D",
      fontColor: "white",
      linkBg: "black",
      linkColor: "white",
      img: data.ds.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "Chop Flix",
      projectCategory: "E-commerce",
      projectInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius fugit illum laboriosam magnam quae,
          quis? Aliquid corporis cupiditate delectus itaque sapiente sint temporibus unde. Cum dolores esse sit
          veritatis!`,
      projectUrl: "http://chop-flix.netlify.app/",
      bgColor: "#F73558",
      fontColor: "white",
      linkBg: "black",
      linkColor: "white",
      img: data.chop.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "FR Logistics",
      projectCategory: "Business",
      projectInfo: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur eius fugit illum laboriosam magnam quae,
          quis? Aliquid corporis cupiditate delectus itaque sapiente sint temporibus unde. Cum dolores esse sit
          veritatis!`,
      projectUrl: "https://www.frlogisticsltd.com",
      bgColor: "white",
      fontColor: "black",
      linkBg: "black",
      linkColor: "white",
      img: data.fr.childImageSharp.fluid
    }
  ];

  return (
    <ProjectList projectData={projectData}/>
  )
}

export default ProjectListContainer