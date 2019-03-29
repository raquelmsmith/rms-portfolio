module.exports = {
  siteMetadata: {
    title: `Raquel M Smith`,
    description: `The home site for Raquel M Smith, a front-end ReactJS developer based in San Luis Obispo, CA.`,
    author: `@raquelmsmith`,
    siteUrl: `https://wizardly-spence-993265.netlify.com`,
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
    `gatsby-plugin-emotion`,
    `gatsby-plugin-polished`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raquel M Smith`,
        short_name: `Raquel M Smith`,
        start_url: `/`,
        background_color: `#a8dcd1`,
        theme_color: `#a8dcd1`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `raquelmsmith.com`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: false,
        includedRoutes: [
          "**/categories",
          "**/comments",
          "**/posts",
          "**/media",
          "**/tags",
          "**/taxonomies",
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
  ],
}
