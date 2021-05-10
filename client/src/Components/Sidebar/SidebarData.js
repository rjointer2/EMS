import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import EventIcon from '@material-ui/icons/Event';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssessmentIcon from '@material-ui/icons/Assessment';

export const SidebarData = [

    {
       title: "Home",
       icon: <HomeIcon />,
       link: "/", 
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/company", 
     },
     {
        title: "Edit Profile",
        icon: <EventIcon />,
        link: "/event", 
     },
     {
        title: "Tasks",
        icon: <BusinessIcon />,
        link: "/dashboard", 
     },
     {
        title: "Chat Room",
        icon: <AssessmentIcon />,
        link: "/analytics", 
     },
    
     {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/logout", 
     },
  
     
];




