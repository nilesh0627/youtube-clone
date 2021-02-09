import React from 'react'

function VideoDetail({video}) {
    console.log(video)
    const videoSrc=`https://www.youtube.com/embed/${video.id}`
    console.log(videoSrc)
    return (
        <div>
            <iframe src={videoSrc} frameBorder="0" title='something'/>
        </div>
    )
}

export default VideoDetail
