

import { Container, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './DashBoardStyle.js';
import { DashBoardChild, FlexUserTable } from './DashBoardStyle.js';

const DashBoard = () => {

    // blank form object to be out base state

    const initialState = {
        firstName: '',
        lastName: '',
        department: '',
        picture: '',
        recovery: ''
    }

    // use to update the state 
    const [value, setValue] = useState('')


    const users = ['bob', 'bill']


    return (

        <div>
            
            <Sidebar />
           
            <Container>

                <Typography variant='h3' align="center" color="primary" style={{
                    paddingTop: 20,
                    paddingBottom: 20
                }} >
                    Admin Dashbard 
                </Typography>

                <Typography align="center" style={{
                    fontSize: '.8em',
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et. Massa enim nec dui nunc mattis enim ut tellus. Augue lacus viverra vitae congue eu consequat ac. 
                    <br/><br/>
                    Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Vestibulum lectus mauris ultrices eros in cursus turpis. Non arcu risus quis varius quam quisque id diam vel. Massa placerat duis ultricies lacus sed turpis tincidunt id. 
                </Typography>


                <form>

                    <Grid container>
                        <Grid item xs={6}>
                            <TextField variant="outlined" label="First Name" value={value.firstName}/>
                            <TextField variant="outlined" label="Last Name" value={value.lastname}/>
                            <TextField variant="outlined" label="Picture" value={value.picture}/>
                            <TextField variant="outlined" label="Department" value={value.department}/>
                            <TextField variant="outlined" label="Recovery" value={value.recovery}/>
                        </Grid>
                        <Grid item xs={6}></Grid>
                    </Grid>

                </form>


                {/* Just use flex box row */}

                {/* make a function for each user re create the grid
                    component
                */}

               <Grid style={{paddingTop: '2em'}}>
                {
                        /* fetch the users and map them here */
                        users.map((user) => {
                            return (
                                /* Replace the text with dynamic values */
                            <Paper style={DashBoardChild}>
                                    <Grid style={FlexUserTable}>
                                        {/* 
                
                                            These should be links and redirect to the user
                                            with a query req from the backend
                
                                            they should be links 
                
                                        */}
                                        <div>
                                            User 
                                            {/* just a picture*/}
                                        </div>
                                        <div>
                                            Tasks
                                            {/* see their tasks and edit them */}
                                        </div>
                                        <div>
                                            Chat with Employee
                                            {/* sends to chatroom */}
                                        </div>
                                        <div>
                                            Edit User
                                            {/* edit the user */}
                                        </div>
                                    </Grid>
                            </Paper>
                            )
                        })
                    }
               </Grid>

            

            </Container>


        </div>

    )
}

export default DashBoard;


