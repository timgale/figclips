const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

//   const blogPostTemplate = path.resolve("src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const result = await graphql(`
    {
        allMdx(limit: 2000, sort: {fields: frontmatter___tags, order: DESC}) {
            edges {
                node {
                slug
                frontmatter {
                    tags
                }
                }
            }
            group(field: frontmatter___tags) {
                fieldValue
            }
        }
    }  
`)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.edges

  // Create post detail pages
//   posts.forEach(({ node }) => {
//     createPage({
//       path: node.fields.slug,
//       component: blogPostTemplate,
//     })
//   })

  // Extract tag data from query
  const tags = result.data.allMdx.group

  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `tips/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}