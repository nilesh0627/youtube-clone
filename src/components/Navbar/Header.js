import React from 'react'
import '../Navbar/Header.css'
import MenuIcon from '@material-ui/icons/MenuSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <button><MenuIcon /></button>
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="Logo"/>
            </div>
            
            <div className="header__form">
                    <input type="text" name="search" value="search"/>
                    <button><SearchIcon className="header__form__icon"/></button>
            </div>

            <div className="header__icons">
                <button><VideoCallSharpIcon className="header__icon" /></button>
                <button><AppsIcon className="header__icon" /></button>
                <button><NotificationsIcon className="header__icon" /></button>
            </div>

        </div>
    )
}

export default Header
