import React from "react"
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

const BlogPost = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { next, prev } = pageContext
  deckDeckGoHighlightElement()

  return (
    <WrapperComponent>
      {
        () => (
          <PageTransition>
            <SEO title={post.frontmatter.title} description={post.excerpt}/>
            <BlogPostWrapper>
              <BackLink to="/blog">&#8592; Back to Posts</BackLink>
              <BlogPostHead>{post.frontmatter.title}</BlogPostHead>
              <BlogPostDate>{post.frontmatter.date}</BlogPostDate>
              <BlogContent dangerouslySetInnerHTML={{ __html: post.html }}/>
              <PostNavWrapper>
                {prev && (
                  <PreviousPost to={prev.fields.slug}>&#8592; Previous <br/> {prev.frontmatter.title}</PreviousPost>)}
                <br/>
                {next && (<NextPost to={next.fields.slug}>Next &#8594;<br/> {next.frontmatter.title}</NextPost>)}
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
            }
        }
    }
`

export default BlogPost