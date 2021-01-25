import React from 'react'
import './SearchResult.css'
import {uploadDateFormat} from '../../helper/uploadDateFormat'
function SearchResult({searchResult}) {
    const {searchResult:{snippet:{channelTitle,description,publishTime,title,thumbnails:{medium:{url:imgSrc}}},id:{kind:type}}}={searchResult}
    const uploadTime=uploadDateFormat(publishTime)
    console.log(searchResult)
    return (
        <div className="searchResult">
            <div className={type!=='youtube#channel' ? '' : 'search__channel__img'}>
                <img src={imgSrc} alt={title}/>
            </div>
            <div className={type!=='youtube#channel' ? 'searchResult__info' : 'searchResult__info channel__info'}>
                <div className="searchResult__info__title">{title}</div>
                <div className="searchResult__info__uploadtime">{uploadTime}</div>
                <div className="searchResult__info__channeltitle">{channelTitle}</div>
                <div className="searchResult__info__description">{description}</div>
            </div>
        </div>
    )
}

export default SearchResult
