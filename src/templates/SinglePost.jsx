import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Container, Header, PostImage, PostTitle, PostContent, Seo } from 'components'

const SinglePost = ({ data }) => {
  const imgFluid = data.mdx.frontmatter.postImage.childImageSharp.fluid
  const seoImage = data.mdx.frontmatter.postImage.publicURL

  const { title, description } = data.mdx.frontmatter
  const { body } = data.mdx

  const postImageStyle = { marginBottom: '60px' }
  const postTitleStyle = { marginBottom: '16px' }

  return (
    <Container>
      <Seo
        title={title}
        image={seoImage}
        description={description}
      />
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
        description
        postImage {
          publicURL
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
