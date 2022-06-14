import React from 'react'
import styles from './videoDetail.module.css'
import {viewsFormat} from '../../helper/viewsFormat'
import {istDateFormat} from '../../helper/ISTDateFormat'

import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


function VideoDescription({title,views,date,likes,dislikes}) {
    return (
        <div className={styles.video__description}>
            <div className={styles.video__title}>{title}</div>
            <div className={styles.video__stats}>
            <blockquote>{views} views <FiberManualRecordIcon style={{fontSize:7}}/> {istDateFormat(date)}</blockquote>
            <div className={styles.video__icons}>
                <div><ThumbUpIcon /> <span>{viewsFormat(likes)}</span></div>
                <div><ThumbDownAltIcon /> <h6>DISLIKE</h6></div>
                <div><ShareIcon/> <span>Share</span></div>
                <div><BookmarkBorderIcon/> <span>Save</span></div>
            </div>
            </div>
            <hr />
        </div>
    )
}

export default VideoDescription
