import React from "react"
import {graphql} from "gatsby"
import WrapperComponent from "../components/wrapper/wrapper.component"
import SEO from "../components/seo"

const BlogPost = ({data}) => {
  const post = data.markdownRemark;

  return (
    <WrapperComponent>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <h1>{post.frontmatter.title}</h1>
    </WrapperComponent>
  );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            html
            frontmatter {
                title
            }
        }
    }
`;

export default BlogPost;