import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Container, Header, PostImage, PostTitle, PostContent } from 'components'

const SinglePost = ({ data }) => {
  const imgFluid = data.mdx.frontmatter.postImage.childImageSharp.fluid
  const { title } = data.mdx.frontmatter
  const { body } = data.mdx

  console.log(body)
  const postImageStyle = { marginBottom: '60px' }
  const postTitleStyle = { marginBottom: '16px' }

  return (
    <Container>
      <Header />
      <PostImage imgFluid={imgFluid} style={postImageStyle} />
      <PostTitle title={title} style={postTitleStyle} />
      <PostContent>
        <MDXRenderer>{body}</MDXRenderer>
      </PostContent>
    </Container>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(locale: "RU", fromNow: false, formatString: "DD MMMM, YYYY")
        title
        slug
        postImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
