const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                path
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(edge => {
        actions.createPage({
          path: edge.node.frontmatter.path,
          component: path.resolve("./src/templates/newsPost.js"),
          context: {
            slug: edge.node.frontmatter.path,
          },
        })
      })
      resolve()
    })
  })
}
