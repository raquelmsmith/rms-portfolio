module.exports = {
  siteMetadata: {
    title: `Raquel M Smith`,
    description: `The home site for Raquel M Smith, a front-end Javascript and PHP developer based in San Luis Obispo, CA.`,
    author: `@raquelmsmith`,
    siteUrl: `https://raquelmsmith.com`,
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allWordpressPost } }) => {
              return allWordpressPost.edges.map(edge => {
                return Object.assign(
                  {},
                  {
                    title: edge.node.title,
                    description: edge.node.excerpt,
                    date: edge.node.date,
                    url: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug,
                    guid: site.siteMetadata.siteUrl + "/blog/" + edge.node.slug,
                  }
                )
              })
            },
            query: `
              {
                allWordpressPost(sort: { fields: [date], order: DESC }) {
                  edges {
                    node {
                      title
                      excerpt
                      slug
                    }
                  }
                }
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Raquel M Smith - RSS Feed",
          },
        ],
      },
    },
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `api.raquelmsmith.com`,
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
          "**/projects",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "wordpressWpProjects",
        imagePath: "featured_media.source_url",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-73283510-1`,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
  ],
}
