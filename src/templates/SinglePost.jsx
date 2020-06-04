import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import { Container, Header, PostImage, PostTitle, PostContent, Seo } from 'components'

const SinglePost = ({ data }) => {
  const imgFluid = data.mdx.frontmatter.postImage.childImageSharp.fluid
  const seoImage = data.mdx.frontmatter.postImage.publicURL

  const { title, description } = data.mdx.frontmatter
  const { body } = data.mdx


  return (
    <Container>
      <Seo
        title={title}
        image={seoImage}
        description={description}
      />
      <Header />
      <PostImage imgFluid={imgFluid} />
      <PostTitle title={title} />
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
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
