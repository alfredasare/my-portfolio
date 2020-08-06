import React from "react"
import { BlogCardContainer, BlogSpan, CardLink, SpanWrapper } from "./blog-card.styles"

const BlogCard = ({date, title, excerpt, tags, slug}) => {
  return (
    <CardLink to={slug}>
      <BlogCardContainer>
        <p>{date}</p>
        <h2>{title}</h2>
        <p>{excerpt}</p>
        <SpanWrapper>
          {
            tags.map((tag, index) => (
              <BlogSpan key={index * 10} color="#FFF0D3">{tag}</BlogSpan>
            ))
          }
        </SpanWrapper>
      </BlogCardContainer>
    </CardLink>
  )
}

export default BlogCard
