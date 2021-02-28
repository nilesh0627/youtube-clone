import React from 'react'
import {useParams} from 'react-router-dom'
function VideoDetail() {
    const {id}=useParams()
    const videoSrc=`https://www.youtube.com/embed/${id}`
    return (
        <div>
            <iframe width="727" height="409" src={videoSrc} frameBorder="0" title='something'/>
        </div>
    )
}

export default VideoDetail
