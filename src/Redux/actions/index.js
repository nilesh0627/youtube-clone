import axios from 'axios';
import {KEY ,baseURL } from '../youtubeConfig'
export function videoSearch(text,pageToken=''){
    return async(dispatch)=>{
        return await axios.get(`${baseURL}/search`,{
            params:{
                part:'id,snippet',
                key:KEY,
                maxResults:10,
                q:text,
                pageToken:pageToken
            }
        }).then((response)=>{
            dispatch({
                type:'SEARCH_RESULTS',
                payload:response.data
            })
        })
    }
}


export function recommendedVideos(pageToken=''){
    return async(dispatch)=>{
        return await axios.get(`${baseURL}/videos`,{
            params:{
                part:'snippet,statistics,contentDetails,id',
                chart:'mostPopular',
                key:KEY,
                maxResults:20,
                pageToken:pageToken
            }
        }).then((response)=>{
            if(pageToken===''){
                dispatch({
                    type:'RECOMMENDED',
                    payload:response.data
                })
            }
            else{
                dispatch({
                    type:'LOAD_MORE_RECOMMENDED',
                    payload:response.data
                })
            }
        })
    }
}

export function searchQuery(term){
    return {
        type:'SEARCH_QUERY',
        payload:term
    }
}

// export function currentVideo(video){
//     return {
//         type:'CURRENT_VIDEO',
//         payload:video
//     }
// }


export function videoDetail(id){
    return async(dispatch)=>{
        const result=await axios.get(`${baseURL}/videos`,{
            params:{
                part:'snippet,statistics,contentDetails,id',
                key:KEY,
                id:id
            }
        })
        console.log(result)
        dispatch({
            type:'VIDEO_DETAIL',
            payload:result.data
        })
    }
}