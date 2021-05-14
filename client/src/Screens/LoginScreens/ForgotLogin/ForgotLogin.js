
import { useState } from "react";
import { Link } from "react-router-dom";

const { Grid, Paper, Avatar, TextField, Typography, Button } = require("@material-ui/core")
const { ArrowUpwardOutlined } = require("@material-ui/icons")
const { ForgotContainer, ForgotInputField } = require("./ForgotLoginStyles")

const ForgotLogin = () => {

    // store the value of the text as state
    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');

    /* function here to handle if the request fails to change */
    const [ labelFirstName, setlabelFirstName ] = useState('First Name');
    const [ labelLastName, setlabelLastName ] = useState('Last Name');

    // if the request fails we want the user to see why 
    // ex incorrect name, incorrect answer

    const [ link, setLink ] = useState('/forgotlogin')

    const requestChangePassword = (state1, state2, fetchedData ) => {

        // if the the fetchedData is null || undefined then return no user found

        if(!fetchedData) return 'Not Found User'

        // if the state !== fetchedData then output incorrect input

        state1 !== fetchedData.firstName ? setlabelFirstName('Please Try Again') : setlabelFirstName('First Name');
        state2 !== fetchedData.lastName ? setlabelLastName('Please Try Again') : setlabelLastName('Last Name');

        setLink('/changelogin');

    }

    
    return (
        
        <Grid >
            <Paper elevation={10} style={ForgotContainer} align="center">
                {/* Sign Up Badge and Sign Up Message and Sign Up Title*/}
                <Grid>
                    <Avatar style={{backgroundColor: '#2F4050'}}>
                        <ArrowUpwardOutlined/>
                    </Avatar>
                    <br/>
                    {/* change the text sizes later */}
                    <Typography variant="h5">
                        Forgot Login?
                    </Typography>
                    <Typography style={{fontSize: 12}} >
                        Answer the questions below...
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label={labelFirstName} placeholder={labelFirstName} style={ForgotInputField} value={firstName} onChange={(e) => {
                        setFirstName(e.target.value)
                    }} required />
                    <TextField label={labelLastName} placeholder={labelLastName} style={ForgotInputField} value={lastName} onChange={(e) => {
                        setLastName(e.target.value)
                    }} required />
                </Grid>
                <Grid>
                    <Typography style={{fontSize: 12}} >
                        What is favorite food?
                    </Typography>
                    <TextField label="Answer Here" placeholder="Type In Answer" style={ForgotInputField} required />
                </Grid>
                <Link to={link}>
                    <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}} onClick={() => {
                        requestChangePassword(firstName, lastName, {firstName: 'Meg', lastName: 'Bacon'})
                    }}>
                        Verify information
                    </Button>
                </Link>
                <Typography style={ForgotInputField}>
                    <Link to='/signup' style={{color: '#2F4050'}}  >
                        Back to Sign In!
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )

}

export default ForgotLogin;