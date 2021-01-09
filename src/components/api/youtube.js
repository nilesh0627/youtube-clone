import axios from 'axios';
import {KEY ,baseURL } from './youtubeConfig'
export async function videoSearch(text){
    const response=await axios.get(`${baseURL}/search`,{
        params:{
            part:'snippet',
            key:KEY,
            maxResults:25,
            q:text
        }
    })

    console.log(response)
}


export async function recommendedVideos(){
    const response=await axios.get(`${baseURL}/videos`,{
        params:{
            part:'snippet,statistics,contentDetails,id',
            chart:'mostPopular',
            key:KEY,
            maxResults:10,
        }
    })

    return response.data
}