import React from 'react'
import './SidebarRow.css'
function SidebarRow({selected,Icon,title}) {
    return (
        <div className={`sidebarRow ${selected}`}>
            <Icon className="sidebarRow-icon"/>
            <p className="sidebarRow-title">{title}</p>
        </div>
    )
}

export default SidebarRow
