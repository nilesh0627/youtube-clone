import React from 'react'
import Header from "../../components/Navbar/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Videos from "../../components/Video/Videos"
import './Home.css'
const Home = ({searchVideo,recommended}) => {
    
    return (
        <>
            <Header searchVideo={searchVideo}/>
            <div className="app__page">
                <Sidebar/>
                <Videos recommended={recommended}/>
            </div>
            
        </>
    )
}

export default Home





