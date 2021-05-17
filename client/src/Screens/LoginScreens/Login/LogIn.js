
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons'

// react hooks and redux tools

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

// react-router

import { Link, useParams } from 'react-router-dom';

// Actions

import { getUserLogin as displayUser } from '../../../Redux/actions/loginActions';


// styles

import { basePadding, flexItems, LogInStyles } from './LogInStyles';

const LogIn = () => {

    // store the value of the text as state
    const [ usernameValue, setUsername ] = useState('');
    const [ passwordValue, setPassword ] = useState('');

    const [ checked, setCheck ] = useState(false);

    // Dispatch will work with the allActions imported from the actions folder.
    const dispatch = useDispatch();

    const getUserLogin = useSelector( state => state.getUserLogin )
    const { error, loading, userLoggedIn } = getUserLogin;

    const object = {
        username: usernameValue,
        password: passwordValue
    }

    console.log(object)




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
                    <TextField label={'Username'} style={basePadding} value={usernameValue} onChange={(e) => {
                        setUsername(e.target.value)
                    }} required />
                    <TextField label={"Password"} style={basePadding} value={passwordValue} onChange={(e) => {
                        setPassword(e.target.value)
                    }} required />
                </Grid>
                <br/>
                <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}}
                    onClick={() => {
                        dispatch(displayUser(object))
                    }}
                >
                        <Link to="/home">
                            Sign In
                        </Link>
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