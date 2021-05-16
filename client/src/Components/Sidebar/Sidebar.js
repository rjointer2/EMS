import React from 'react'
import { Link } from 'react-router-dom';



import './Sidebar.css'
import ProfileImage from '../ProfileImage/ProfileImage';
import {SidebarData} from './SidebarData'



function Sidebar() {


    return (
        <div className="Sidebar_container">
            <div className="Sidebar">
            <ProfileImage />
            <ul className="SidebarList"> 
                {SidebarData.map((val, key)=> {
                return (
                    <li key={key} className="row" > 
                        <Link to={val.link}>
                            <div id="icon">{val.icon}</div> 
                            <div id="title">{val.title}</div>
                        </Link>
                    </li>
                );
                    
                })}
                <li className="row">
                    <Link to="/">

                    </Link>
                    {/*  

                        {
    title: "Logout",
    icon: <ExitToAppIcon />,
    link: "/", 
 },

                    
                    */}

                </li>
            </ul>
        </div>     
    </div>  
    )
    
    
}

export default Sidebar;
