import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
    post
} from '../../components/layout.module.css'

const TipsPage = ({ data }) => {
    return (
        <Layout>
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <div className={post}>
                            <Link to={`/tips/${node.slug}`}>
                                <h2>{node.frontmatter.title}</h2>
                                    <p>{node.excerpt}</p>
                            </Link>
                        </div>
                    </article>
                )) 
            }
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    date(formatString: "MMMM D, YYYY")
                }
                id
                slug
                excerpt
            }
        }
    }
`

export default TipsPage