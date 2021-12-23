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
  headingTagline,
  main,
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div className={container}>
      <title>FigClips | Figma tips and resources</title>
      <div className={headingContainer}>
        <div>
          <Link to="/" className={headingLink}>
            <span className={headingImage}></span>
            <h1 className={heading}>FigClips</h1>
          </Link>
          <span className={headingTagline}>Tips and tricks for your Figma design workflow</span>
        </div>
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