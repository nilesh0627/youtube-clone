import React from 'react'
import {uploadDateFormat} from './uploadDateFormat'
function VideoCard({video}) {
    const {
        video:{snippet:{thumbnails:{medium:{url:src}},title:videoTitle,channelTitle:channelName,publishedAt:uploadDate},
        statistics:{viewCount:views}}
    }={video}
    const uploadTime=uploadDateFormat(uploadDate)
    console.log(uploadTime)
    return (
        <div>
            <div><img src={src} alt="Thumbnail"/></div>
            <strong>{videoTitle}</strong>
            <p>{channelName}</p>
            <p>{views}views {uploadTime}</p>
        </div>
    )
}

export default VideoCard



//image
// video Title
// Channel Name
// 3.4M Views 5 days ago