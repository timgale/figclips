import React from "react"
import { 
    video,
    videoContent,
} from './layout.module.css'

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className={video}>
        <iframe className={videoContent}
            src={videoSrcURL}
            title={videoTitle}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameBorder="0"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            allowFullScreen
        />
    </div>
)
export default Video