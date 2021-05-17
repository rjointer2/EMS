

import './SideDrawer.css';
import { SidebarData } from '../SideBarData'

import { Link } from 'react-router-dom'
import ProfileImage from '../../ProfileImage/ProfileImage';


const SideDrawer = ({show, click}) => {
    const sideDrawerClass = ['sideDrawer'];

    if(show) sideDrawerClass.push('show');

    

    return <div className={sideDrawerClass.join(' ')}>
        <ul className='sideDrawer_links' onClick={click}>
            <ProfileImage />
            {/* Construct a new link element */}
            {SidebarData.map((val, link) => {
                return (
                    <li>
                        <Link to={val.link}>
                            { console.log(val.link)}
                            <div id="icon">{val.icon}</div> 
                            <div id="title">{val.title}</div>
                        </Link>
                    </li>
                )
            })}
        </ul>
    </div>
}

export default SideDrawer;

/* 

return (

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

)

<li>
                <Link to="/cart">
                    <span>

                        
                        </span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/shop'>
                            <span>

                                
                            </span>
                        </Link>
                    </li>



*/