import React from 'react'
import './Videos.css'
import VideoCard from './VideoCard'
const Videos = ({recommended}) => {
    return (
        <div className="videos">
            <h2>Recommended</h2>
            <div className="videos__container">
                {recommended.map((video)=>{
                    return <VideoCard key={video.id} video={video}/>
                })}
            </div>
        </div>
    )
}

export default Videos
