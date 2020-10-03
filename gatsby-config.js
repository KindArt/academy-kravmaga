module.exports = {
  pathPrefix: "/academy-kravmaga",
  siteMetadata: {
    title: `Krav Maga`,
    fullTitle: "Krav Maga Academy",
    description: `Grow in Fitness, Confidence & Skills`,
    author: `Kind Art`,
    companyAddress: "Unit A, Elm Court, Capstone Road, Gillingham, ME7 3JQ",
    facebookUrl: "https://www.facebook.com/AcademyKravMaga/",
    instagramUrl: "https://www.instagram.com/kravmaga_uk/",
    contactNumber: "07853 976 699",
    googleMapApiKey: "",
    addressLongitude: "0.563630",
    addressLatitude: "51.341340",
    siteUrl: `http://www.academy-kravmaga.co.uk/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
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
        name: `academy-kravmaga-site`,
        short_name: `academy-kravmaga`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`, `400`, `600`, `700`],
          },
          {
            family: `Open Sans`,
            subsets: [`latin`],
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
