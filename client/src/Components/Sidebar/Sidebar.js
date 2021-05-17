
import { useState } from 'react'

// imports 

import Navbar from './Navbar/Navbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';

const Sidebar = () => {

    // if the state is false then the side bar doesn't show
    const [sideToggle, setSideToggle] = useState(false);

    return (
        <div>

        <Navbar click={() => setSideToggle(true)}/>
        <SideDrawer show={sideToggle}/>
        <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>

        </div>
    )

}

export default Sidebar