
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
       link: "/home", 
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon />,
        link: "/dashboard", 
     },
     {
        title: "Edit Profile",
        icon: <EventIcon />,
        link: "/editprofile", 
     },
     {
        title: "Tasks",
        icon: <BusinessIcon />,
        link: "/tasks", 
     },
     {
        title: "Chat Room",
        icon: <AssessmentIcon />,
        link: "/chatrooms", 
     },
    
     {
        title: "Logout",
        icon: <ExitToAppIcon />,
        link: "/logout", 
     },
  
     
];