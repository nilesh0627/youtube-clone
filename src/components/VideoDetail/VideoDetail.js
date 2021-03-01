import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './videoDetail.module.css'
import {videoDetail} from '../../Redux/actions'
import VideoDescription from './VideoDescription'




function VideoDetail({videoDetail,video}) {
    const {id}=useParams()
    const videoSrc=`https://www.youtube.com/embed/${id}`
    if(video){
        var {snippet:{localized:{title},publishedAt:date},statistics:{viewCount:views,likeCount:likes,dislikeCount:dislikes}} =video[0]
    }

    console.log(video)
    

    useEffect(()=>{
        videoDetail(id)
    },[])

    if(!video) return <h1>Loading...</h1>
    else {
        return (
            <div className={styles.video}>
                <div className={styles.video__container}>
                <iframe className={styles.responsive__iframe} src={videoSrc} frameBorder="0" title='something'/>
                </div>
                <VideoDescription title={title} views={views} date={date} likes={likes} dislikes={dislikes}/>
            </div>
        )
    }
}

function mapStateToProps({currentVideo}){
    return {
        video:currentVideo.items
    }
}

const mapDispatchToProps={
    videoDetail:videoDetail
}

export default connect(mapStateToProps,mapDispatchToProps)(VideoDetail)
