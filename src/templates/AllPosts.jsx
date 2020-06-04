import React from 'react'
import { graphql } from 'gatsby'
import { Container, Header, PostCardWrap, Seo } from 'components'

const AllPosts = ({ pageContext, data }) => {
  // const { currentPage, numPages } = pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPages
  // const prewPage = currentPage - 1 === 1 ? '/' : `${currentPage - 1}`
  // const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges

  return (
    <Container>
      <Seo />
      <Header />
      <PostCardWrap posts={posts} />
    </Container>
  )
}

export default AllPosts

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY", locale: "RU", fromNow: true)
            slug
            title
            postImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
