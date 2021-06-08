import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ProjectList from "./project-list.component"
import uuid from 'react-uuid'
import { ProjectListWrapper } from "./project-list.styles"

const ProjectListContainer = ({theme}) => {

  const data = useStaticQuery(graphql`
      query {
          ds: file(relativePath: { eq: "design_studios.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          chop: file(relativePath: { eq: "chop_flix.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          edanra: file(relativePath: { eq: "edanra.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          
          evodia: file(relativePath: { eq: "evodia.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          wavepod: file(relativePath: { eq: "wavepod.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }

          fr: file(relativePath: { eq: "fr_logistics.png"}) {
              childImageSharp {
                  fluid(maxWidth: 2000) {
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
          
          qube: file(relativePath: {eq: "qube_pcs.png"}) {
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
      projectUrl: "https://wevops.co/",
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
                    handle state and redux-saga was used as the middleware to handle asynchronous operations. `,
      projectUrl: "https://www.edanra.com",
      bgColor: `${ theme === "dark" ? "#404040" : "#f7f7f7"}`,
      fontColor: `${theme === "dark" ? "#ffffff" : "#000000"}`,
      linkBg: "black",
      linkColor: "white",
      img: data.edanra.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "Wavepod",
      projectCategory: "Podcast",
      projectInfo: `A podcast app inspired by Google Podcasts. The frontend was built with NextJS, styled-components and redux. 
                    Node, Express, MongoDB, Jest and Supertest were used to build the backend.`,
      projectUrl: "https://wavepod.vercel.app",
      bgColor: "#FF4365",
      fontColor: "white",
      linkBg: "black",
      linkColor: "white",
      img: data.wavepod.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "Evodia",
      projectCategory: "E-commerce",
      projectInfo: `Evodia is a perfume ecommerce web app. Evodia was built with NextJS, styled-components and redux was used for state
                    management. Its REST API was built with MongoDB, Node and Express and tested with Jest and Supertest. Both the front and
                    backend were hosted on vercel.`,
      projectUrl: "https://evodia.vercel.app",
      bgColor: "#AF3736",
      fontColor: "white",
      linkBg: "black",
      linkColor: "white",
      img: data.evodia.childImageSharp.fluid
    },
    {
      id: uuid(),
      projectName: "Qube PCS",
      projectCategory: "Consultancy",
      projectInfo: `QUBE PCS is an internationally experienced professional services company that supports global organisations that wish to invest in, own and operate assets. 
                    It was created using GatsbyJS.`,
      projectUrl: "https://qubepcs.com/",
      bgColor: `${ theme === "dark" ? "#404040" : "#f7f7f7"}`,
      fontColor: `${theme === "dark" ? "#ffffff" : "#000000"}`,
      linkBg: "black",
      linkColor: "white",
      img: data.qube.childImageSharp.fluid
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
    // {
    //   id: uuid(),
    //   projectName: "FR Logistics",
    //   projectCategory: "Business",
    //   projectInfo: `FR Logistics is a logistics company that provides safe and reliable delivery and warehousing services.
    //                 The platform helps their customers book their services quickly and easily. It was created using HTML, CSS, JavaScript and Django.`,
    //   projectUrl: "https://www.frlogisticsltd.com",
    //   bgColor: `${ theme === "dark" ? "#404040" : "#f7f7f7"}`,
    //   fontColor: `${theme === "dark" ? "#ffffff" : "#000000"}`,
    //   linkBg: "black",
    //   linkColor: "white",
    //   img: data.fr.childImageSharp.fluid
    // },
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
  ];

  return (
    <ProjectListWrapper>
      <ProjectList projectData={projectData}/>
    </ProjectListWrapper>
  )
}

export default ProjectListContainer