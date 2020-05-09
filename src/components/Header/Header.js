import { Link } from "gatsby"
import PropTypes from "prop-types"
import style from './Header.module.css'
import { useStaticQuery, graphql } from "gatsby"
import React from "react"

const Header = (props) => {
  const data = useStaticQuery(graphql`
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
`
  )
    return(
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

          <a href="https://www.instagram.com/" className={style.headerInst}><img src={data.contentfulLanguage.image.resolutions.src} /></a>
        </div>
      </header >
      
     )

    }


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header


