import React from 'react'
import { Link } from 'react-router-dom';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import './Sidebar.css'
import ProfileImage from '../ProfileImage/ProfileImage';
import {SidebarData} from './SidebarData';


import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'



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
                        {/*  Some logout function */}
                        <div id='icon'><ExitToAppIcon /></div>
                        <div id='title'>Logout</div>
                    </Link>
                   

                </li>
            </ul>
        </div>     
    </div>  
    )
    
    
}

export default Sidebar;
