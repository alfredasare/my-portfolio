import React, { useContext } from "react"
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader"
import WrapperComponent from "../components/wrapper/wrapper.component"
import SEO from "../components/seo"
import {
  BackLink,
  BlogContent,
  BlogPostDate,
  BlogPostHead,
  BlogPostWrapper,
  NextPost, PostNavWrapper,
  PreviousPost
} from "./blog-post.styles"
import Footer from "../components/footer/footer.component"
import PageTransition from 'gatsby-plugin-page-transitions';
import NavBar from "../components/navbar/navbar.component"
import TagContext from "../context/tagContext"

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev } = pageContext
  deckDeckGoHighlightElement()

  const {tag} = useContext(TagContext);

  return (
    <WrapperComponent>
      {
        (theme, themeMode, themeToggler) => (
          <PageTransition>
            <SEO title={post.frontmatter.title} description={post.excerpt}/>
            <NavBar theme={theme} themeMode={themeMode} toggleTheme={themeToggler}/>
            <BlogPostWrapper>
              <BackLink to="/blog">&#8592; Back to Posts</BackLink>
              <BlogPostHead>{post.frontmatter.title}</BlogPostHead>
              <BlogPostDate>{post.frontmatter.date}</BlogPostDate>
              <BlogContent dangerouslySetInnerHTML={{ __html: post.html }}/>
              <PostNavWrapper>
                {
                  prev && (post.frontmatter.tags.includes(prev.frontmatter.tags[0]) || tag === 'All')
                    ? (<PreviousPost to={prev.fields.slug}>&#8592; Previous <br/> {prev.frontmatter.title}</PreviousPost>)
                    : <></>
                }
                <br/>
                {
                  next && (post.frontmatter.tags.includes(next.frontmatter.tags[0])  || tag === 'All')
                    ? (<NextPost to={next.fields.slug}>Next &#8594;<br/> {next.frontmatter.title}</NextPost>)
                    : <></>
                }
              </PostNavWrapper>
            </BlogPostWrapper>
            <Footer/>
          </PageTransition>
        )
      }
    </WrapperComponent>
  )
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
                date
                tags
            }
        }
    }
`

export default BlogPost