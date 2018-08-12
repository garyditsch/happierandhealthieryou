import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.scss'

const Layout = ({ children, data, location }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'A Daily Program to Help You Change Behaviors and Uncover Happiness and Health' },
        { name: 'keywords', content: 'health, happiness, fitness, behavior, mind-set' },
      ]}
      script={[
        { src: "https://use.fontawesome.com/releases/v5.0.7/js/all.js", type: "text/javascript" }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} location={location} />
      {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
