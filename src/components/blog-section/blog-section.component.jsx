import React from "react"
import { BlogSectionHead, BlogSectionParagraph, BlogSectionWrapper, SmallBlogSectionHead } from "./blog-section.styles"
import { graphql, useStaticQuery } from "gatsby"
import BlogCard from "../blog-card/blog-card.component"
import uuid from "react-uuid"
import { BlogListContainer } from "../blog-list/blog-list.styles"

const BlogSection = () => {

  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
              totalCount
              edges {
                  node {
                      id
                      excerpt
                      frontmatter {
                          date(formatString: "DD MMMM, YYYY")
                          title
                          tags
                      }
                      fields {
                          slug
                      }
                      html
                  }
              }
          }
      }
  `);

  return (
    <BlogSectionWrapper>
      <SmallBlogSectionHead>
        BLOG
      </SmallBlogSectionHead>
      <BlogSectionHead>
        LATEST BLOG POSTS
      </BlogSectionHead>
      <BlogSectionParagraph>
        Here's a list of the latest posts on my blog. Be sure to check them out <span role="img" aria-label="wink">😉</span>
      </BlogSectionParagraph>
      <BlogListContainer>
        {
          data.allMarkdownRemark.edges.slice(0,3).map(({node}) => (
            <BlogCard key={uuid()} excerpt={node.excerpt} slug={node.fields.slug} {...node.frontmatter}/>
          ))
        }
      </BlogListContainer>
    </BlogSectionWrapper>
  )
}

export default BlogSection
