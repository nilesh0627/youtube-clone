import axios from 'axios';
import {KEY ,baseURL } from '../youtubeConfig'
export function videoSearch(text){
    return async(dispatch)=>{
        return await axios.get(`${baseURL}/search`,{
            params:{
                part:'id,snippet',
                key:KEY,
                maxResults:10,
                q:text
            }
        }).then((response)=>{
            dispatch({
                type:'SEARCH_RESULTS',
                payload:response.data
            })
        })
    }
       
}


export function recommendedVideos(){
    return async(dispatch)=>{
        return await axios.get(`${baseURL}/videos`,{
            params:{
                part:'snippet,statistics,contentDetails,id',
                chart:'mostPopular',
                key:KEY,
                maxResults:20,
            }
        }).then((response)=>{
            dispatch({
                type:'RECOMMENDED',
                payload:response.data
            })
        })
    }
}