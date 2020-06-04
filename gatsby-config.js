module.exports = {
  siteMetadata: {
    title: 'Frontender notes | Заметки фронтенд разработчика', // от 70-ти до 80-ти знаков
    description: 'Дружественные заметки и туториалы для фронтенд разработчиков. С фокусом на Javascript, React, Gatsby, CSS и анимации', // до 150-ти знаков
    url: 'https://frontendernotes.netlify.app',
    twitterUsername: '@MrYeroshenko',
    image: './space.jpg',
    author: 'Valeriy Yeroshenko'
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 100,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [{
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1200,
          },
        }],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'montserrat\:400,400i,600,600i,700,700i'
        ],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'ru'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Frontender notes | Заметки фронтенд разработчика',
        short_name: 'Frontender notes',
        start_url: '/',
        background_color: '#0E141B',
        theme_color: '#0E141B',
        display: 'standalone',
        icon: './static/favicon-512.png',
        include_favicon: true,
        crossOrigin: 'use-credentials'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-168539740-1',
        head: true,
        anonymize: true
      }
    }
  ]
}