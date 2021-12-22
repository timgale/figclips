// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { 
  container,
} from '../components/layout.module.css'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>Welcome to FigClips! Your regular dose of Figma tips.</p>
      <StaticImage
        alt="Text image"
        src="https://via.placeholder.com/500"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage