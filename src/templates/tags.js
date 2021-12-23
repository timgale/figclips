import React from "react"
import PropTypes from "prop-types"
import { Link, graphql } from "gatsby"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <div>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={`/tips/${slug}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
    query($tag: String) {
        allMdx(
            limit: 2000
            filter: {frontmatter: {tags: {in: [$tag]}}}
            sort: {fields: frontmatter___date, order: DESC}
            ) {
                totalCount
                edges {
                    node {
                        slug
                        frontmatter {
                            title
                        }
                    }
                }
            }
    } 
`