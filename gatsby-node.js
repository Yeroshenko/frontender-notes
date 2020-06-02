const path = require('path')

exports.createPages = async ({ actions, graphql }) => {

  const { createPage } = actions
  const allPosts = path.resolve('./src/templates/AllPosts.jsx')
  const singlePost = path.resolve('./src/templates/SinglePost.jsx')

  const { data } = await graphql(`
    query {
      allMdx(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `
)
  // Create paginated

  const postPerPage = 3 // allMdx(limit: 3)
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/' : `/${i + 1}`,
      component: allPosts,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1
      }
    })
  })

  // create single blog posts

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    createPage({
      path: slug,
      component: singlePost,
      context: { id }
    })
  })
}