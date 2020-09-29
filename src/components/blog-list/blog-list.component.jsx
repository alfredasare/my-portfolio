import React, { useContext } from "react"
import {useStaticQuery, graphql} from "gatsby"
import { BlogListContainer } from "./blog-list.styles"
import BlogCard from "../blog-card/blog-card.component"
import uuid from "react-uuid";
import TagContext from "../../context/tagContext"
import TagList from "../tag-list/tag-list.component"


const BlogList = () => {

  const {tag} = useContext(TagContext);
  const data = useStaticQuery(graphql`
      query {
          allMarkdownRemark(
              sort: {fields: [frontmatter___date], order: ASC}
          ) {
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
    <>
      <TagList />
      <BlogListContainer layout>
        {
          data.allMarkdownRemark.edges
            .filter(({node}) => {
              if (tag === 'All') {
                return node;
              } else {
                return node.frontmatter.tags.includes(tag)
              }
            })
            .map(({node}) => (
              <BlogCard key={uuid()} excerpt={node.excerpt} slug={node.fields.slug} {...node.frontmatter}/>
            ))
        }
      </BlogListContainer>
    </>
  )
}

export default BlogList
