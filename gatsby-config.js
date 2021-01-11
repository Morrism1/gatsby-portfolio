module.exports = {
  siteMetadata: {
    title: 'Maurice Murangwa Portfolio',
    author: 'Maurice Murangwa',
    description: 'This is a personal portfolio website of Maurice Murangwa',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Maurice Murangwa',
        short_name: 'rangwa',
        start_url: 'www.rangwa.tech',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
