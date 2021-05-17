

import { Container, Grid, makeStyles, Paper, TextField, Typography, Avatar, Card, } from '@material-ui/core';
import { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import './DashBoardStyle.js';
import { DashBoardChild, FlexUserTable } from './DashBoardStyle.js';

const DashBoard = () => {

    const useStyles = makeStyles(theme => ({

        root: {
            '& .FormContainer-root': {
                width: '80%',
                margin: theme.spacing(1)
            }
        },
        NewEmployeeHeader: {
            padding: theme.spacing(4),
            display: 'flex',
            marginBottom: theme.spacing(3)
        },
        NewEmployeeForm: {
            margin: theme.spacing(3),
            padding: theme.spacing(3)
        },
        NewEmployeeInput: {
            margin: 5
        }

    }));

    const classes = useStyles()

    const newEmployeeState = {
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        department: '',
        picture: '',
        recovery: '',
        admin: ''
    }


    // blank form object to be out base state to the user

    const ExistingEmployeeState = {
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

                <div>


            <Paper elevation={0} square>    
                <div className={classes.NewEmployeeHeader}>
                    <Card style={{padding: '1em', display: 'flex', alignItems: 'center'}}>
                        <Avatar style={{marginRight: '1em'}}>
                            <PersonAddIcon />
                        </Avatar>
                        <Grid>
                        Add New Employee<br/>
                        <div style={{fontSize: '10px'}}>
                            Click here when complete
                        </div>
                        
                        </Grid>
                    </Card>
                </div>
            </Paper>

            <Paper className={classes.NewEmployeeForm}>
                <form className={classes.root}>

                <Grid container>
                    <Grid item xs={12}>
                        <TextField variant="outlined" label="First Name" value={value.firstName} className={classes.NewEmployeeInput}/>
                        <TextField variant="outlined" label="Last Name" value={value.lastname} className={classes.NewEmployeeInput}/>
                        <TextField variant="outlined" label="Username" value={value.username} className={classes.NewEmployeeInput}/>
                        <TextField variant="outlined" label="Password" value={value.password} className={classes.NewEmployeeInput}/>
                        <TextField variant="outlined" label="Department" value={value.department} className={classes.NewEmployeeInput}/>
                        <TextField variant="outlined" label="Recovery" value={value.recovery} className={classes.NewEmployeeInput}/>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>

                </form>
            </Paper>
        </div>
                


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


