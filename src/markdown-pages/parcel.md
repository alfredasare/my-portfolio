---
title: 'Setting Up React With Parcel'
date: '2020-09-03'
tags: ['React']
---

#Big O Notation

If you have ever applied for a job at a Tech company or if you offered Computer Science in the university, 
there is a probability you have come across the term **Big O**. The term is **Big O Asymptotic Analysis** but is more 
popularly known as the **Big O Notation** (You can definitely use the term Big O Asymptotic Analysis just to show off 
when talking to friends :wink:)

## Qualities of Good Code
Before defining what Big O is, I would like to talk about two very important qualities of good code. They are readability
and scalability.

### Readability
This simply refers to how easy it is for your code to be read and understood by others.

### Scalability
I like to think of scalability like this. Given **n** inputs or elements, by how much will your code slow down or perform as **n** increases. 
The slower the code slows down, the better it is. If its not completely clear right now, don't worry. You'll get it as we move along.

When we talk about scalability of code, two main properties come to mind:
1. Speed
2. Memory

The main idea is to write code that's fast and consumes little memory. Unfortunately, its not that simple. Code that is 
extremely fast can end up consuming more memory. On the other hand, you can have a code that consumes less memory which is
very slow. The key is to find the right balance in order to obtain optimum efficiency.

## Why The Need For Big O
You may be thinking, "So how do I know how well my code performs given as the inputs vary ?" Enter Big O Notation. The Big O
notation is used to describe the performance and complexity of an algorithm. It basically defines the time required or space
needed to successfully execute an algorithm. Being able to determine this enables one to know the usefulness of a particular
algorithm or code.


We will discuss the most common runtimes one after another as time goes by so that you at least get a fair idea of each of
them. I will also try to keep each post as short as possible.Till then, Happy coding! :punch:

```jsx
import React, { useEffect, useState } from "react"
import {useStaticQuery, graphql} from "gatsby"
import { BlogListContainer } from "./blog-list.styles"
import BlogCard from "../blog-card/blog-card.component"
import uuid from "react-uuid";


const BlogList = () => {

  const [tag, setTag] = useState('Data Structures & Algorithms');

  useEffect(() => {

  }, [tag]);

  const changeTag = () => {
    setTag("React");
  }

  return (
    <BlogListContainer layout>
        <button onClick={changeTag}>Change</button>
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
  )
}

export default BlogList

 ``` 

<br />



