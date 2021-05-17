
import React from 'react';
import './ChatRoom.css';


import { Grid } from '@material-ui/core';
import Sidebar from '../../Components/Sidebar/Sidebar';

const ChatRoom = () => {
    return (
        <div >
            <Sidebar />
            <Grid>
                Hello
            </Grid>
        </div>
    )
}

export default ChatRoom;