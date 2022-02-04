// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About">
        <div>
          <p>Welcome! FigClips is your go to place for bitesized Figma tips to (hopefully) help improve your design workflow.</p>
          <p>A project by <Link to="https://timgale.design">Tim Gale</Link></p>
        </div>
    </Layout>
  )
}

// Step 3: Export your component
export default AboutPage