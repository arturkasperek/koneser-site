module.exports = {
  siteMetadata: {
    title: `Koneser - Meble dla wymagających`,
    description: `Firma „Koneser” działa od 2006 roku i specjalizuje się w produkcji mebli na wymiar. Jako naszą główną dewizę uznajemy jakość i terminowość naszych realizacji przy zachowaniu atrakcyjnej ceny.`,
    author: `Artur Kasperek`,
    siteUrl: `https://koneser-meble.pl`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-cname`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-client-side-redirect`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://koneser-meble.pl',
        sitemap: 'https://koneser-meble.pl/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
