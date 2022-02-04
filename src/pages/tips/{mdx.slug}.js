import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";
import Video from "../../components/video";
import {
    postFocus,
    postHeader,
    postTitle,
    postTags,
    postTagContainer,
    tagContent,
} from "../../components/layout.module.css";

const TipPost = ({ data }) => {
    return (        
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <div className={postFocus}>
                <div className={postHeader}>
                    <div className={postTitle}>
                        <h2>{data.mdx.frontmatter.title}</h2>
                    </div>
                    <div className={postTags}>
                        {
                            data.mdx.frontmatter.tags.map(tag => (
                                <span tag-name={tag} className={postTagContainer}>
                                    <span className="{tagContent}">{tag}</span>
                                </span>
                            ))
                        }
                    </div>
                </div>
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
                tags
            }
            body
        }
    }  
`

export default TipPost