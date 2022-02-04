import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
    post,
    postHeader,
    postTags,
    postTitle,
    postTagContainer,
} from '../../components/layout.module.css'

const TipsPage = ({ data }) => {
    return (
        <Layout pageTitle="Tips">
            {
                data.allMdx.nodes.map(node => (
                    <article key={node.id}>
                        <div className={post}>
                            <title>FigClips | Figma tips and resources</title>
                            <Link to={`/tips/${node.slug}`}>
                                <div className={postHeader}>
                                    <div className={postTitle}>
                                        <h2>{node.frontmatter.title}</h2>
                                    </div>
                                    <div className={postTags}>
                                        {
                                            node.frontmatter.tags.map(tag => (
                                                <span tag-name={tag} className={postTagContainer}>
                                                    <span className="{tagContent}">{tag}</span>
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
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
                    tags
                }
                id
                slug
                excerpt
            }
        }
    }
`

export default TipsPage