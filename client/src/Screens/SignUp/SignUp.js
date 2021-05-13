import { Link } from "react-router-dom"

const { Grid, Paper, Avatar, TextField, Typography, Checkbox, Button } = require("@material-ui/core")
const { ArrowUpwardOutlined } = require("@material-ui/icons")
const { signUpContainer, signUpInputField } = require("./SignUpStyles")

const SignUp = () => {

    /* 
        Sign Up Form
        _______________________________

        Accept Terms

        Sign Up Button
        
    */

    return (
        
        <Grid >
            <Paper elevation={10} style={signUpContainer} align="center">
                {/* Sign Up Badge and Sign Up Message and Sign Up Title*/}
                <Grid>
                    <Avatar>
                        <ArrowUpwardOutlined/>
                    </Avatar>
                    {/* change the text sizes later */}
                    <Typography>
                        Sign Up
                    </Typography>
                    <Typography>
                        Please fill out the information below.
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label="firstName" placeholder="First Name" style={signUpInputField} required />
                    <TextField label="lastName" placeholder="Last Name" style={signUpInputField} required />
                </Grid>
                <Grid>
                    {/* Flex These */}
                    <Checkbox 
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                    <Typography>
                        Are you a Manager?
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label="Username" placeholder="User Name" style={signUpInputField} required />
                    <TextField label="Password" placeholder="Password" style={signUpInputField} required />
                    <TextField label="Confrim Password" placeholder=" Confirm Password" style={signUpInputField} required />
                </Grid>
                <Grid>
                    <TextField label="Department" placeholder="Add Department Here..." style={signUpInputField} required />
                </Grid>
                <Grid>
                    <Checkbox 
                        defaultChecked
                        color="default"
                        inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                    <Typography>
                        Do you argee to the Terms of Service?
                    </Typography>
                </Grid>
                <Link>
                    <Button>
                        Sign Up!
                    </Button>
                </Link>
            </Paper>
        </Grid>

    )

}

export default SignUp;