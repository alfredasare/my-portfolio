import React from "react"
import { graphql, Link } from "gatsby"
import WrapperComponent from "../components/wrapper/wrapper.component"
import SEO from "../components/seo"
import Cursor from "../components/cursor/cursor.component"
import NavBar from "../components/navbar/navbar.component"

export default ({data}) => {

  return (
    <WrapperComponent>
      <SEO title="Blog Posts" />
      <Cursor />
      <NavBar />
      <div style={{height: '100vh'}}>
        <div style={{marginTop: '250px', color: 'black'}}>
          {
            data.allMarkdownRemark.edges.map(({node}) => (
              <Link key={node.id} style={{color: 'black'}} to={node.fields.slug}>
                <h1>{node.frontmatter.title}</h1>
              </Link>
            ))
          }
        </div>
      </div>
    </WrapperComponent>
  );
}

export const query = graphql`
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
                    }
                    fields {
                        slug
                    }
                    html
                }
            }
        }
    }
`;