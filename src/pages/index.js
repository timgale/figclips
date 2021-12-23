// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
// import Layout from '../components/layout'
// import { StaticImage } from 'gatsby-plugin-image'
import { 
  container,
  headingContainer,
  heading,
  headingImage,
  headingLink,
  main,
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div className={container}>
      <div className={headingContainer}>
        <Link to="/" className={headingLink}>
          <span className={headingImage}></span>
          <h1 className={heading}>FigClips</h1>
        </Link>
      </div>
      <div className={main}>
        <p>Check back soon</p>
      </div>
    </div>
    // <Layout pageTitle="Home">
    //   <p>Welcome to FigClips! Your regular dose of Figma tips.</p>
    //   <StaticImage
    //     alt="Text image"
    //     src="https://via.placeholder.com/500"
    //   />
    // </Layout>
  )
}
// Step 3: Export your component
export default IndexPage