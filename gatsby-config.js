module.exports = {
  siteMetadata: {
    title: `Elco`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      },
    },
    {
      resolve: `gatsby-theme-i18n`,
      options: {
        defaultLang: `fr`,
        configPath: require.resolve(`./i18n/config.json`)
      }
    }
  ]
};
