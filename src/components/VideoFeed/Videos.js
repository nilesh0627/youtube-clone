import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import './Videos.css'
import VideoCard from './VideoCard'
import Button from '../../utils/Button'
import {recommendedVideos} from '../../Redux/actions'
const Videos = ({recommended,recommendedVideos,nextPageToken}) => {

    useEffect(()=>{
        recommendedVideos()
    },[])

    const loadMore=()=>{
        console.log(nextPageToken)
        recommendedVideos(nextPageToken)
    }

    return (
        <div className="videos">
            <h2>Recommended</h2>
            <div className="videos__container">
                {recommended.map((video)=>{
                    return <VideoCard key={video.id} video={video}/>
                })}
            </div>
            <Button text='Load More..' handleClick={loadMore}/>
        </div>
    )
}

const mapStateToProps=({recommended})=>{
    return {
        recommended:recommended.items,
        nextPageToken:recommended.nextPageToken
    }
}

const mapDispatchToProps={
    recommendedVideos:recommendedVideos
}
export default connect(mapStateToProps,mapDispatchToProps)(Videos)
