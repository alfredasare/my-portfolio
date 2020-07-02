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

          edanra: file(relativePath: { eq: "edanra2.jpeg"}) {
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
      projectInfo: `This website was created for an upcoming start-up called Wevops that specializes in UI design and 
                    web development. It was created using React and Gsap was used for most of the animations`,
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
      projectInfo: `Edanra helps connect home owners with potential tenants. It was made using React and Firebase. Redux was used to
                    handle state and redux-saga was used as the middleware tio handle asynchronous operations. `,
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
      projectInfo: `This website was developed for a design company which specializes in graphic design and
                    animations. However they are yet to provide their works and site content and hence the use of dummy data. 
                    It was also developed using React.`,
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
      projectInfo: `Chop Flix is an ecommerce platform used to sell drum packs for music producers. The site is still in
                    development. So far the main technology that has been used is React.`,
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
      projectInfo: `FR Logistics is a logistics company that provides saf and reliable delivery and warehousing services. 
                    The platform helps their customers book their services quickly and easily. It was created using HTML, CSS, JavaScript and Django.`,
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