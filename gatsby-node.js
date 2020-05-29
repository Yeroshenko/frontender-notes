// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql`
//     query {
//       allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//         edges {
//           node {
//             frontmatter {
//               slug
//             }
//             id
//           }
//         }
//       }
//     }
//   `

//   // Create paginated

//   const postPerPage = 3
//   const numPages = Math.ceil(data.allMdx.edges.length / postPerPage)

//   Array.from({ length: numPages }).forEach((item, i) => {
//     actions.createPages({
//       path: i === 0 ? '/' : `/${i + 1}`,
//       components: require.resolve('./src/templates/AllPosts.jsx'),
//       constext: {
//         limit: postPerPage,
//         skip: i * postPerPage,
//         numPages,
//         currentPage: i + 1
//       }
//     })
//   })

//   // create single blog posts

//   data.allMdx.edges.forEach(edge => {
//     const slug = edge.node.frontmatter.slug
//     const id = edge.node.id
//     actions.createPages({
//       path: slug,
//       omponents: require.resolve('./src/templates/SinglePost.jsx'),
//       context: { id }
//     })
//   })

// }