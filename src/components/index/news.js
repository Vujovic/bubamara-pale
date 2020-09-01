import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql, Link } from "gatsby"

const NewsSection = () => {
  return (
    <News>
      <div className="lead">
        <h1>НОВОСТИ</h1>
        <Link to="/novosti">Све новости ></Link>
      </div>
      <StaticQuery
        query={fetchPosts}
        render={data => (
          <div className="cards">
            {data.allMarkdownRemark.edges.map(card => (
              <div className="card" key={card.node.frontmatter.path}>
                <Link to={card.node.frontmatter.path}>
                  <img
                    src={card.node.frontmatter.image}
                    alt={card.node.frontmatter.title}
                  />
                  <h2>{card.node.frontmatter.title}</h2>
                  <p className="date">{card.node.frontmatter.date}</p>
                  <p className="excerpt">{card.node.excerpt}</p>
                </Link>
              </div>
            ))}
          </div>
        )}
      />
    </News>
  )
}

export default NewsSection

const fetchPosts = graphql`
  query {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            image
            date(formatString: "D.M.YYYY.")
          }
          excerpt
        }
      }
    }
  }
`

const News = styled.section`
  margin-bottom: 60px;
  .lead {
    text-align: center;
    h1 {
      border-bottom: 2px solid #ff0066;
      color: #3a9a9f;
      display: inline-block;
      font-size: 24px;
      margin-bottom: 20px;
      padding: 5px 15px;
    }
    a {
      color: #ff0066;
      display: block;
      margin-bottom: 20px;
    }
  }
  .cards {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    .card {
      background-color: #ff0066;
      border-radius: 30px;
      color: #fcfafa;
      margin: 20px;
      transition: all 0.3s;
      :hover {
        transform: translateY(-10px);
      }
    }
    a {
      color: #fcfafa;
    }
    img {
      border-radius: 25px 25px 0 0;
      height: 100%;
      width: 100%;
      max-width: 360px;
    }
    h2 {
      font-size: 16px;
      max-width: 250px;
      margin: 20px auto 0 auto;
      text-align: center;
    }
    p {
      font-size: 14px;
      margin: 30px;
      max-width: 300px;
      text-align: justify;
    }
    .date {
      font-size: 12px;
      margin: 0;
      margin-bottom: 20px;
      text-align: right;
    }
  }
`
