import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from './Header.module.css'
import { StaticQuery, graphql } from "gatsby"
import React from "react"

const Header = () => (
  <StaticQuery query={graphql`
query{
  site {
    siteMetadata {
      title
    }
  }
  contentfulLanguage {
    image {
      resolutions {
        src
      }
      id
    }
  }
}  
`}

    render={data => (
      <header className={style.headerClass} >
        <div className={style.headerDiv}>
          <Link to='/'>
            <h1 className={style.headerTopText}>
              {data.site.siteMetadata.title}
            </h1>
          </Link>
          <div className={style.headerNav}>
            <Link to='/news'>NEWS</Link>
            <Link to='/blog'>BLOG</Link>
            <Link to='/aboutme'>ABOUT</Link>
          </div>

          <img src={data.contentfulLanguage.image.resolutions.src} />
        </div>
      </header >
    )}
  />
)




Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

