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
                payload:{
                    data:response.data,
                    text:text
                }
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
            dispatch({
                type:'RECOMMENDED',
                payload:response.data
            })
        })
    }
}

export function searchQuery(term){
    return {
        type:'SEARCH_QUERY',
        payload:term
    }
}