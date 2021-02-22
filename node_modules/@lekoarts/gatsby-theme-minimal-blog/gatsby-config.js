const newsletterFeed = require(`./src/utils/newsletterFeed`)

module.exports = (options) => {
  const { feed = true, feedTitle = `Portfolio of Vikyath Shirva` } = options

  return {
    siteMetadata: {
      siteTitle: `Vikyath Shirva`,
      siteTitleAlt: `Vikyath Shriva | Software Dev`,
      siteHeadline: `Vikyath Shriva | Software Dev`,
      siteUrl: `https://vikyathshirva.com`,
      siteDescription: `Welcome to my Portfolio`,
      siteLanguage: `en`,
      siteImage: `/banner.jpg`,
      author: `Vikyath Shirva`,
    },
    plugins: [
      {
        resolve: `@lekoarts/gatsby-theme-minimal-blog-core`,
        options,
      },
      feed && {
        resolve: `gatsby-plugin-feed`,
        options: newsletterFeed(feedTitle),
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-typescript`,
      `gatsby-plugin-catch-links`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
