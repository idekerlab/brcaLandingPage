module.exports = {
  pathPrefix: 'breastcancer',
  siteMetadata: {
    title: `CCMI "Protein Interaction Landscape of Breast Cancer" Project Page`,
    description: `CCMI project page for "The Protein Interaction Landscape of Breast Cancer"`,
    author: `UCSD Ideker Lab`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#1E88E5`,
        theme_color: `#1E88E5`,
        display: `minimal-ui`,
        icon: `src/images/ideker_favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
