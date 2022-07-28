module.exports = {
  siteMetadata: {
    title: `Elco`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-anchor-links`,
      options: {
        offset: -90
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: "src/assets/icons/favicon.png"
      },
    },
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
        name: `assets`,
        path: `${__dirname}/src/assets`
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`,
        languages: [`fr`, `en`],
        defaultLanguage: `fr`,
        siteUrl: `https://classy-tartufo-f513aa.netlify.app`,
        redirect: false,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: '/preview',
            languages: ['fr'],
          },
        ],
      },
    }
  ]
};
