import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NewsPost = props => (
  <Layout>
    <SEO title={props.data.markdownRemark.frontmatter.title} />
    <Post>
      <img
        src={props.data.markdownRemark.frontmatter.image}
        alt={props.data.markdownRemark.frontmatter.title}
      />
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div
        className="text"
        dangerouslySetInnerHTML={{
          __html: props.data.markdownRemark.html,
        }}
      ></div>
    </Post>
  </Layout>
)

export const PostQuery = graphql`
  query getPost($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
        image
      }
    }
  }
`

export default NewsPost

const Post = styled.article`
  color: #5f6c82;
  padding: 100px 20px 40px 20px;
  margin: 0 auto;
  max-width: 800px;
  > h1 {
    text-align: center;
  }
  .text {
    p {
      margin: 20px 0;
      text-align: justify;
    }
  }
  img {
    border-radius: 20px;
    margin: 10px auto;
    max-width: 740px;
  }
`
