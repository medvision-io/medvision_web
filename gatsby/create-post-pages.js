const path = require("path")
const { postsPerPage } = require("../config")

module.exports = async (graphql, actions) => {
  const { createPage } = actions

  const {
    data: {
      allMarkdownRemark: { totalCount },
    },
  } = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: { draft: { eq: false }, template: { eq: "post" } }
        }
      ) {
        totalCount
      }
    }
  `)

  const numPages = Math.ceil(
    totalCount / postsPerPage
  )

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/posts/` : `/posts/${i + 1}`,
      component: path.resolve("./src/templates/blog-list-template.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        hasPrevPage: i !== 0,
        hasNextPage: i !== numPages - 1,
      },
    })
  })
}
