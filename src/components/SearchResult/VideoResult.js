import React from 'react'
import './videoResult.css'
import {uploadDateFormat} from '../../helper/uploadDateFormat'
function VideoResult({searchResult}) {
    const {searchResult:{snippet:{channelTitle,description,publishTime,title,thumbnails:{medium:{url:imgSrc}}}}}={searchResult}
    const uploadTime=uploadDateFormat(publishTime)
    return (
        <div className="searchResult">
            <div className="searchResult__image">
                <img src={imgSrc} alt={title}/>
            </div>
            <div className="searchResult__info">
                <div className="searchResult__info__title">{title}</div>
                <div className="searchResult__info__uploadtime">{uploadTime}</div>
                <div className="searchResult__info__channeltitle">{channelTitle}</div>
                <div className="searchResult__info__description">{description}</div>
            </div>
        </div>
    )
}

export default VideoResult
