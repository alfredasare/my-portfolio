---
title: 'Big O Asymptotic Analysis'
date: '2020-08-03'
tags: ['Data Structures & Algorithms']
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

The amount of time required to run an algorithm is called its **time complexity**. The amount of space needed by that algorithm
to run is called its **space complexity**.

Below are some of the most common time and space complexities:
* Constant Runtime (**O(1)**)
* Linear Runtime (**O(n)**)
* Logarithmic Runtime (**O(logn)**)
* Linear Runtime (**O(n)**)
* Quadratic Runtime (**O(n<sup>2</sup>)**)
* Exponential Runtime (**O(2<sup>n</sup>)**)
* Factorial Runtime (**O(n!)**)
* Super-linear Runtime- (**O(nlogn)**)

The following chart shows how each runtime varies as the number of elements increase

![Big O Cheat Sheet](https://miro.medium.com/max/2928/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)

We will discuss the most common runtimes one after another as time goes by so that you at least get a fair idea of each of
them. I will also try to keep each post as short as possible.Till then, Happy coding! :punch:

<br />

## References
1. <a href="https://www.bigocheatsheet.com/" target="_blank">Big O Cheat Sheet</a>
2. <a href="https://www.theavocoder.com/big-o-notation/2018/12/22/big-o-notation" target="_blank">Theavocoder - Big O Notation</a>




