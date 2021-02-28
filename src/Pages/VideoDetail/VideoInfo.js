import React from 'react'
import VideoDetail from '../../components/VideoDetail/VideoDetail'
import Header from "../../components/Navbar/Header"
function VideoInfo({video}) {
    return (
        <div>
            <Header />
            <VideoDetail />
        </div>
    )
}



export default VideoInfo
