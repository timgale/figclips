import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import Video from "../../components/video";

const BlogPost = ({ data }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            <Video
                videoSrcURL={data.mdx.frontmatter.videoSourceURL}
                videoTitle={data.mdx.frontmatter.videoTitle}
            />
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                videoSourceURL
                videoTitle
            }
            body
        }
    }  
`

export default BlogPost