
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles

import { basePadding, flexItems, LogInStyles } from './LogInStyles';

const LogIn = () => {

    // store the value of the text as state
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    /* function here to handle if the request fails to change */
    const [ labelFirstName, setlabelFirstName ] = useState('First Name');
    const [ labelLastName, setlabelLastName ] = useState('Last Name');

    const [ checked, setCheck ] = useState(false);




        /* TESTING THE REQ */


        const request = async () => {
             // REMEMBER TO CHANGE THE ROUTE IN THE REACT ROUTER TO HAVE A :username param
            const res = await fetch(`/api/users/login`, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',

                },
                // Our server will compare user's creds and return a object if successful or
                // unsuccessful, we will dispatch will this action for our reducer to specify
                // to the store what happened and how to update the state
                body: JSON.stringify({username: 'hi', password: 'hi'})
            })

            console.log(res)

            const data = await res.json();

            return data;
        };

        request();














    return (

        <Grid>
            <Paper elevation={10} style={LogInStyles} align="center"> 
                <Grid>
                    <Avatar style={{backgroundColor: '#2F4050'}}>
                        <LockOutlined/>
                    </Avatar>
                    <br/>
                    <Typography variant="h5">
                        Login
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label={labelFirstName} placeholder={labelFirstName} style={basePadding} value={firstName} onChange={(e) => {
                        setFirstName(e.target.value)
                    }} required />
                    <TextField label={labelLastName} placeholder={labelLastName} style={basePadding} value={lastName} onChange={(e) => {
                        setLastName(e.target.value)
                    }} required />
                </Grid>
                <br/>
                <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}}>
                        Sign In
                </Button>
                <Grid>
                    <FormControlLabel 
                        control={
                            <Checkbox
                                onChange={() => {
                                    checked ? setCheck(false) : setCheck(true)
                                }}
                                name="checkBox"
                                color='primary'
                            />
                        }
                        label="Remember Me?"
                        style={{paddingTop: 10}}
                    />
                    <Grid style={flexItems}>
                        <Typography>
                            <Link to='/forgotlogin' style={{color: '#2F4050'}}>
                                Forget Password?
                            </Link>
                        </Typography>
                        <Typography>
                            <Link to='/signup' style={{color: '#2F4050'}}>
                                No Login? Sign Up!
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default LogIn;