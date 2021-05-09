import React from 'react'
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
        
        <ul className="SidebarList"> 
            {SidebarData.map((val, key)=> {
        
        return (
            
            <li key={key}
            className="row" 
            id={window.location.pathname === val.link ? "active" : ""}
            onClick={()=> {
                window.location.pathname = val.link
                }}> 
            
            <div id="icon">{val.icon}</div> 
            <div id="title">{val.title}</div>
                
            
            </li>
        );
            
        })}
        
        </ul>
        
        </div>     
    </div>  
    
    );   
    
}

export default Sidebar;
