import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import { BlogListContainer } from "./blog-list.styles"
import BlogCard from "../blog-card/blog-card.component"
import uuid from "react-uuid";

const BlogList = () => {

  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark(sort: {fields: [frontmatter___date], order: ASC}) {
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
    <BlogListContainer>

        {
            data.allMarkdownRemark.edges.map(({node}) => (
              <BlogCard key={uuid()} excerpt={node.excerpt} slug={node.fields.slug} {...node.frontmatter}/>
            ))
        }
    </BlogListContainer>
  )
}

export default BlogList
