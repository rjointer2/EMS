import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


import './Sidebar.css'
import ProfileImage from '../ProfileImage/ProfileImage';
import {SidebarData} from './SidebarData'



function Sidebar() {

  //for toggling the sidebar
  const [ toggle, setToggle ] = useState(false)

  useEffect(() => {

    // if url path strictly compares to the following set state to true
    setToggle( 
        (window.location.pathname === '/') || 
        (window.location.pathname === '/signup') || 
        (window.location.pathname === '/logout') || 
        (window.location.pathname === '/forgotlogin')
    )

      // dependents for rerenders
  }, [setToggle, toggle])

  console.log(toggle)


    return !toggle && <div className="Sidebar_container">
            <div className="Sidebar">
            <ProfileImage />
            <ul className="SidebarList"> 
                {SidebarData.map((val, key)=> {
                return (
                    <li key={key} className="row" > 
                        <Link to={val.link} onClick={() => {
                            // right now a brute force fix for the page not removing the sidebar
                            setTimeout(() => {
                                window.location.reload()
                            },100)
                        }}>
                            <div id="icon">{val.icon}</div> 
                            <div id="title">{val.title}</div>
                        </Link>
                    </li>
                );
                    
                })}
            </ul>
        </div>     
    </div>  
    
    
}

export default Sidebar;
