import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import Video from "../../components/video";
import {
    postFocus
} from "../../components/layout.module.css";

const TipPost = ({ data }) => {
    return (        
        <Layout>
            <div className={postFocus}>
                <h2>{data.mdx.frontmatter.title}</h2>
                    <MDXRenderer>
                        {data.mdx.body}
                    </MDXRenderer>
                    <Video
                        videoSrcURL={data.mdx.frontmatter.videoSourceURL}
                        videoTitle={data.mdx.frontmatter.videoTitle}
                    />
            </div>
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

export default TipPost