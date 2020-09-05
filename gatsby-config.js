module.exports = {
  siteMetadata: {
    title: `Sega Fitness`,
    fullTitle: "Sega Health & Fitness",
    description: `Medway's Body Transformation Coach`,
    author: `Kind Art`,
    companyAddress: "Unit A, Elm Court, Capstone Road, Gillingham, ME7 3JQ",
    facebookUrl: "https://www.facebook.com/SegaFitness/",
    instagramUrl: "https://www.instagram.com/segafitnessmedway/",
    contactNumber: "07383 363 326",
    googleMapApiKey: "AIzaSyAUAYxlyMyuhcKaBXq1LMxBWUh4mqYgpik",
    addressLongitude: "0.563630",
    addressLatitude: "51.341340",
    siteUrl: `http://www.segafitness.co.uk`,
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
        name: `sega-fitness-site`,
        short_name: `sega-fitness`,
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
