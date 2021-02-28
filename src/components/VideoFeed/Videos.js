import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import './Videos.css'
import VideoCard from './VideoCard'
import Button from '../../utils/Button'
import {recommendedVideos} from '../../Redux/actions'
const Videos = ({recommended,nextPageToken,dispatch}) => {
    useEffect(()=>{
            if(recommended.length===0){
                console.log('Videos Mount')
                dispatch(recommendedVideos())
            }
        return ()=>{
            console.log('Videos unmounted')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const loadMore=()=>{
        console.log(nextPageToken)
        dispatch(recommendedVideos(nextPageToken))
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


export default connect(mapStateToProps)(Videos)
