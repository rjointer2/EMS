import { useState } from "react";
import { Link } from "react-router-dom";

import { ChangeInput, ChangeContainer } from './ChangeLoginStyle';

const { Grid, Paper, Avatar, TextField, Typography, Button } = require("@material-ui/core")
const { ArrowUpwardOutlined } = require("@material-ui/icons")

// styles


const ChangeLogin = () => {


    // store the value of the text as state
    const [ username, setFirstName ] = useState('');
    const [ password, setLastName ] = useState('');

    /* function here to handle if the request fails to change */
    const [ labelUserName, setLabelUserName ] = useState(' Userame');
    const [ labelPassword, setLabelPassword] = useState('Password');


    const [ checked, setCheck ] = useState(false);

    return (

        <Grid >
            <Paper elevation={10} style={ChangeContainer} align="center">
                {/* Sign Up Badge and Sign Up Message and Sign Up Title*/}
                <Grid>
                    <Avatar style={{backgroundColor: '#2F4050'}}>
                        <ArrowUpwardOutlined/>
                    </Avatar>
                    <br/>
                    {/* change the text sizes later */}
                    <Typography variant="h5">
                        Change Login Info
                    </Typography>
                    <Typography style={{fontSize: 12}} >
                        Write it down this time!
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label={labelUserName} placeholder={labelUserName} style={ChangeInput} value={username} onChange={(e) => {
                        setLabelUserName(e.target.value)
                    }} required />
                    <TextField label={labelUserName} placeholder={labelPassword} style={ChangeInput} value={password} onChange={(e) => {
                        setLabelPassword(e.target.value)
                    }} required />
                </Grid>
                <Grid>
                    <Typography style={{fontSize: 12}} >
                        What is favorite food?
                    </Typography>
                    <TextField label="Answer Here" placeholder="Type In Answer" style={ChangeInput} required />
                </Grid>
                <Link>
                    <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}}>
                        Verify information
                    </Button>
                </Link>
                <Typography style={ChangeInput}>
                    <Link to='/signup' style={{color: '#2F4050'}}  >
                        Back to Sign In!
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default ChangeLogin;