module.exports = {
  siteMetadata: {
    title: `An Do`,
    description: `An Do's portfolio and personal blogs`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `An Do's porfolio ad personal blogs`,
        short_name: `andodevel`,
        start_url: `/`,
        background_color: `#458588`,
        theme_color: `#458588`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              tracedSVG: { color: '#64ffda' },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': `${__dirname}/src`,
          '@components': `${__dirname}/src/components`,
          '@fonts': `${__dirname}/src/fonts`,
          '@images': `${__dirname}/src/images`,
          '@pages': `${__dirname}/src/pages`,
          '@styles': `${__dirname}/src/styles`,
        },
        extensions: ['js'],
      },
    },
  ],
};
