import React from 'react'
import { Link } from 'react-router-dom';
import ProfileImage from '../ProfileImage/ProfileImage';
import './Sidebar.css'
import {SidebarData} from './SidebarData'


function Sidebar() {

    return (
        // container 
        /* 
            100vh

        */

    <div className="Sidebar_container">
        <div className="Sidebar">
            <ProfileImage />
            <ul className="SidebarList"> 
                {SidebarData.map((val, key)=> {
                return (
                    // This will have react-router 
                    <li key={key}
                        className="row" 
                        id={window.location.pathname === val.link ? "active" : ""}
                        /* 
                            onClick={()=> {
                            window.location.pathname = val.link
                    }}
                        */
                        
                        > 
                        <Link to={val.link} >
                            <div id="icon">{val.icon}</div> 
                            <div id="title">{val.title}</div>
                        </Link>
                    </li>
                );
                    
                })}
            </ul>
        </div>     
    </div>  
    
    );   
    
}

export default Sidebar;
