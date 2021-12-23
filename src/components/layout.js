import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    headingContainer,
    heading,
    headingImage,
    headingLink,
    headingTagline,
    navLinks,
    navLinkItem,
    navLinkText,
    navLinkTextActive,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={headingContainer}>
        <div>
          <Link to="/" className={headingLink}>
            <span className={headingImage} />
            <h1 className={heading}>{data.site.siteMetadata.title}</h1>
          </Link>
          <span className={headingTagline}>Tips and tricks for your Figma design workflow</span>
        </div>
      </header>
      <nav>
        <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText} activeClassName={navLinkTextActive}>Home</Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/about" className={navLinkText} activeClassName={navLinkTextActive} partiallyActive={true}>About</Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/tips" className={navLinkText} activeClassName={navLinkTextActive} partiallyActive={true}>Tips</Link>
            </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout