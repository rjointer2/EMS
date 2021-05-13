
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// styles

import { basePadding, flexItems, LogInStyles, paddingInput } from './LogInStyles';

const LogIn = () => {

    const [ checked, setCheck ] = useState(false)

    console.log(checked)

    return (

        <Grid>
            <Paper elevation={10} style={LogInStyles} align="center"> 
                <Grid>
                    <Avatar style={{backgroundColor: '#2F4050'}}>
                        <LockOutlined/>
                    </Avatar>
                    <br/>
                    <Typography variant="h5">
                        Sign Up
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label="Username" placeholder="Enter Username" style={basePadding} required />
                    <TextField label="Password" placeholder="Enter Password" style={basePadding} required />
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
                            <Link to='/' style={{color: '#2F4050'}}>
                                Forget Password?
                            </Link>
                        </Typography>
                        <Typography>
                            <Link to='/' style={{color: '#2F4050'}}>
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