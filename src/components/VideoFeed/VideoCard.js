import React from 'react'
import {uploadDateFormat} from '../../helper/uploadDateFormat'
import {viewsFormat} from '../../helper/viewsFormat'
import './VideoCard.css'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import {useHistory} from 'react-router-dom'

function VideoCard({video}) {
    let history=useHistory()
    const {
        video:{snippet:{thumbnails:{medium:{url:src}},title:videoTitle,channelTitle:channelName,publishedAt:uploadDate},
        statistics:{viewCount:totViews}}
    }={video}
    const uploadTime=uploadDateFormat(uploadDate)
    const views=viewsFormat(totViews)

    const handleClick=()=> {
        history.push(`/video/${video.id}`)
    }
    
    return (
        <div className="video" onClick={handleClick}>
            <div className="video__thumbnail"><img src={src} alt="Thumbnail"/></div>
            <div className="video__title">{videoTitle}</div>
            <div className="video__channel">
                <div className="video__channel__name">{channelName}</div>
                <div className="video__channel__icon"><VerifiedUserIcon style={{fontSize:'medium'}}/></div>
            </div>
            <div className="video__info">
                <p>{views} views</p>
                <p>{uploadTime}</p>
            </div>
        </div>
    )
}

export default VideoCard



