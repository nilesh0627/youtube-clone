import axios from 'axios';
import {KEY ,baseURL } from './youtubeConfig'
export async function videoSearch(text){
    const response=await axios.get(`${baseURL}/search`,{
        params:{
            part:'id,snippet',
            key:KEY,
            maxResults:10,
            q:text
        }
    })
    console.log(response.data)
    return response.data
    
}


export async function recommendedVideos(){
    const response=await axios.get(`${baseURL}/videos`,{
        params:{
            part:'snippet,statistics,contentDetails,id',
            chart:'mostPopular',
            key:KEY,
            maxResults:20,
        }
    })

    return response.data
}