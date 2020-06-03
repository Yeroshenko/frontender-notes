import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const globalKeywords = [
  'Блог фронтенд разработчика',
  'Заметки фронтенд разработчика',
  'Javascript разработка',
  'Gatsby blog',
  'Javascript',
  'Frontend',
  'Gatsby',
  'Гетсби',
  'React',
  'Реакт'
]

export const Seo = ({
  description,
  keywords,
  title,
  image,
  url,
  author,
  twitterUsername
}) => (
  <StaticQuery
    query={detailsQuert}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const metaAuthor = author || data.site.siteMetadata.author
      const metaUrl = url || data.site.siteMetadata.url
      const metaImage = image || data.site.siteMetadata.image
      const metaKeywords = keywords || globalKeywords

      return (
        <Helmet
          title={metaTitle}
          meta={[
            {
              name: 'description',
              content: metaDescription
            },
            {
              name: 'Author',
              content: metaAuthor
            },
            {
              property: 'og:title',
              content: metaTitle
            },
            {
              property: 'og:description',
              content: metaDescription
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              property: 'og:image',
              content: metaImage
            },
            {
              property: 'og:url',
              content: metaUrl
            },
            {
              name: 'twitter:card',
              content: 'summary_large_image'
            },
            {
              name: 'twitter:creator',
              content: twitterUsername
            },
            {
              name: 'twitter:title',
              content: metaTitle
            },
            {
              name: 'twitter:description',
              content: metaDescription
            },
            {
              name: 'twitter:image',
              content: metaImage
            }
          ].concat(
            metaKeywords && metaKeywords.length > 0
              ? {
                  name: 'keywords',
                  content: metaKeywords.join(', ')
                }
              : []
          )}
        />
      )
    }}
  />
)

const detailsQuert = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        twitterUsername
        image
      }
    }
  }
`
