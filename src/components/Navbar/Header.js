import React from 'react'
import '../Navbar/Header.css'
import MenuIcon from '@material-ui/icons/MenuSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchBar from './SearchBar'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <button><MenuIcon /></button>
                <Link to='/'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="Logo"/>
                </Link>
                
            </div>
            
            
            <SearchBar />
            

            <div className="header__icons">
                <button><VideoCallSharpIcon className="header__icon" /></button>
                <button><AppsIcon className="header__icon" /></button>
                <button><NotificationsIcon className="header__icon" /></button>
            </div>

        </div>
    )
}

export default Header
