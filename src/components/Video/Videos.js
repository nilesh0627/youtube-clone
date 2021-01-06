import React from 'react'
import './Videos.css'
import VideoCard from './VideoCard'
const Videos = () => {
    return (
        <div className="videos">
            <h2>Recommended</h2>
            <div className="videos__container">
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
        </div>
    )
}

export default Videos
