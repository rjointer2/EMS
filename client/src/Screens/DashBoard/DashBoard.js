/* 

    GOALS

    Admin can can only see this
    ->  Function that if the user.property is admin or admin set to true then the sidebar
        will display the dashboard


        TABLE IS CREATED WHEN A USER IS FETCH FOR EACH USER
    ->  Add, Remove and Update tasks for employees

    Example Table

    USER 
    |____SHOW TASK____EDIT TASK____REMOVE TASK____TASK__STATUS

    For right now, we don't need to worry about redux/react-redux
    It doesn't matter exactly what the user's data is... what matters is how the user's data is handled



*/

import { Container, Grid, Paper, Typography } from '@material-ui/core';
import Sidebar from '../../Components/Sidebar/Sidebar';
import './DashBoardStyle.js';
import { DashBoardChild, FlexUserTable } from './DashBoardStyle.js';

const DashBoard = () => {


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


