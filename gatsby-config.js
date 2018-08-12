module.exports = {
  siteMetadata: {
    title: 'Happier & Healthier You',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ld3ikfuoxa4m`,
        accessToken: `b2c5503efc80dae793d0f147904cd76f186ea08d728367f90a0b160a05f40c01`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Happier & Healthier You",
        short_name: "HHY",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#CAE4DB",
        display: "minimal-ui",
        icon: "src/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`
  ],
  pathPrefix: `/project-name`,
}
