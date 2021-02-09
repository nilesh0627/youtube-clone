import React from 'react'
import {connect} from 'react-redux'
import VideoDetail from '../../components/VideoDetail/VideoDetail'
import Header from "../../components/Navbar/Header"
function VideoInfo({video}) {
    return (
        <div>
            <Header />
            <VideoDetail video={video}/>
        </div>
    )
}

function mapStateToProps({currentVideo}){
    return {
        video:currentVideo
    }
}

export default connect(mapStateToProps,null)(VideoInfo)
