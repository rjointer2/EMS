
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';

import { LockOutlined } from '@material-ui/icons';
import { useState } from 'react';

import { Link } from 'react-router-dom';

// styles

import { basePadding, ChangeLoginStyles } from './ChangeLoginStyle';

const ChangeLogin = () => {

    const [ checked, setCheck ] = useState(false);

    return (

        <Grid>
            <Paper elevation={10} style={ChangeLoginStyles} align="center"> 
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
                    <TextField label="Username" placeholder="Enter Username" style={basePadding} required />
                    <TextField label="Password" placeholder="Enter Password" style={basePadding} required />
                </Grid>
                <br/>
                <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}}>
                        Change Login Info
                </Button>
            </Paper>
        </Grid>
    )
}

export default ChangeLogin;