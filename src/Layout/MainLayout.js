import React from 'react'
import './MainLayout.css'
import Header from "../components/Navbar/Header"
import Sidebar from "../components/Sidebar/Sidebar"
function MainLayout(props){
    console.log(props)
    return (
        <div className="app__page">
            <Header searchVideo={props.searchVideo}/>
            <Sidebar/>
            {props.children}
        </div>
    )
}

export default MainLayout