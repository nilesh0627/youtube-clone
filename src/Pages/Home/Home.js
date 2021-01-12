import React from 'react'
import Videos from "../../components/VideoFeed/Videos"
import './Home.css'
import MainLayout from '../../Layout/MainLayout'

const Home = ({searchVideo,recommended}) => { 
    return (
        <MainLayout searchVideo={searchVideo}>
            <Videos recommended={recommended}/>
        </MainLayout>

    )
}

export default Home





