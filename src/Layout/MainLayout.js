import React,{useState} from 'react'
import styles from './MainLayout.module.css'
import Header from "../components/Navbar/Header"
import Sidebar from "../components/Sidebar/Sidebar"
function MainLayout(props){
    const [sidebarDisplay,setSidebarDisplay]=useState(false)
    const containerStyles=sidebarDisplay ? styles.layout__container : styles.layout__full
    return (
        <div className={styles.layout}>
            <Header sidebarDisplay={sidebarDisplay} setSidebarDisplay={setSidebarDisplay}/>
        <div className={containerStyles}>
            <Sidebar sidebarDisplay={sidebarDisplay}/>
            {props.children}
        </div>
        </div>
    )
}

export default MainLayout