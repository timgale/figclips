import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
    container,
    headingContainer,
    heading,
    headingImage,
    headingLink,
    navLinks,
    navLinkItem,
    navLinkText
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
        <Link to="/" className={headingLink}>
          <span className={headingImage} />
          <h1 className={heading}>{data.site.siteMetadata.title}</h1>
        </Link>
      </header>
      <nav>
        <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>Home</Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>About</Link>
            </li>
            <li className={navLinkItem}>
                <Link to="/tips" className={navLinkText}>Tips</Link>
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