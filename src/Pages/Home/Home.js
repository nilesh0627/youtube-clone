import React from 'react'
import Header from "../../components/Navbar/Header"
import Sidebar from "../../components/Sidebar/Sidebar"
import Videos from "../../components/Video/Videos"
import './Home.css'
const Home = ({sidebar,handleToggleSidebar}) => {
    return (
        <>
            <Header handleToggleSidebar={handleToggleSidebar}/>
            <div className="app__page">
                <Sidebar sidebar={sidebar}/>
                <Videos />
            </div>
            
        </>
    )
}

export default Home





