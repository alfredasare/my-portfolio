import React, { useEffect } from "react"
import {useStaticQuery, graphql} from "gatsby"
import {gsap, Power0} from "gsap"
import {
  ErrorBrand,
  ErrorFooter,
  ErrorImage,
  ErrorImageContainer, ErrorLogo, ErrorSocialContainer, ErrorSocialLink,
  Head404, HomeButton,
  MainContent, MainContentWrapper,
  MainParagraph,
  MainTitle,
  NotFoundWrapper
} from "./not-found.styles"
import Cursor from "../cursor/cursor.component"


const NotFound = () => {

  useEffect(() => {
    gsap.to('.astro', {duration: 2.5,
      y: -30,
      ease: Power0.easeNone,
      stagger: {
        amount: 1,
        yoyo: true,
        repeat: -1
      }})
  }, []);

  const data = useStaticQuery(graphql`
    query {
        astro: file(relativePath: { eq: "astro.png"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        errorLogo: file(relativePath: { eq: "brand.png"}) {
            childImageSharp {
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
  `);

  return (
    <NotFoundWrapper>
      <Cursor />
      <MainContentWrapper>
        <MainContent>
          <ErrorLogo className="top-logo" to="/">
            <ErrorBrand fluid={data.errorLogo.childImageSharp.fluid}/>
          </ErrorLogo>
          <Head404>404</Head404>
          <MainTitle>Lost in space.</MainTitle>
          <MainParagraph>
            You seem lost. Don't sweat it. You can return home by clicking the
            link below.
          </MainParagraph>
          <HomeButton to="/">
            GO HOME
          </HomeButton>
        </MainContent>
        <ErrorImageContainer className="astro">
          <ErrorImage fluid={data.astro.childImageSharp.fluid}/>
        </ErrorImageContainer>
      </MainContentWrapper>
      <ErrorFooter>
        <ErrorSocialContainer>
          <ErrorSocialLink href="https://web.facebook.com/alfred.asareamoah" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f" aria-hidden="true"/>
          </ErrorSocialLink>
          <ErrorSocialLink href="https://www.instagram.com/_alfredamoah_/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram" aria-hidden="true" />
          </ErrorSocialLink>
          <ErrorSocialLink href="https://www.linkedin.com/in/alfred-asare-amoah-2b31b5142/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin" aria-hidden="true" />
          </ErrorSocialLink>
          <ErrorSocialLink href="https://github.com/alfredasare" target="_blank" rel="noreferrer">
            <i className="fab fa-github" aria-hidden="true" />
          </ErrorSocialLink>
        </ErrorSocialContainer>
        <ErrorLogo to="/">
          <ErrorBrand fluid={data.errorLogo.childImageSharp.fluid}/>
        </ErrorLogo>
      </ErrorFooter>
    </NotFoundWrapper>
  );
};

export default NotFound;