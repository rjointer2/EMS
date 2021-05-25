import { Link } from "react-router-dom";

const { Grid, Paper, Avatar, TextField, Typography, Checkbox, Button, FormControlLabel } = require("@material-ui/core")
const { ArrowUpwardOutlined } = require("@material-ui/icons")
const { signUpContainer, signUpInputField, flexItems } = require("./SignUpStyles")

const SignUp = () => {

    return (
        
        <Grid >
            <Paper elevation={10} style={signUpContainer} align="center">
                {/* Sign Up Badge and Sign Up Message and Sign Up Title*/}
                <Grid>
                    <Avatar style={{backgroundColor: '#2F4050'}}>
                        <ArrowUpwardOutlined/>
                    </Avatar>
                    <br/>
                    {/* change the text sizes later */}
                    <Typography variant="h5">
                        Sign Up
                    </Typography>
                    <Typography style={{fontSize: 12}} >
                        Please fill out the information below.
                    </Typography>
                </Grid>
                <Grid>
                    <TextField label="First Name" placeholder="First Name" style={signUpInputField} required />
                    <TextField label="Last Name" placeholder="Last Name" style={signUpInputField} required />
                </Grid>
                <Grid align="center" style={flexItems}>
                    <FormControlLabel 
                        control={
                            <Checkbox
                               
                                name="checkBox"
                                color='primary'
                            />
                        }
                        label="Are You A Manager?"
                        style={{paddingTop: 10}}
                    />
                </Grid>
                <Grid>
                    <TextField label="Username" placeholder="User Name" style={signUpInputField} required />
                    <TextField label="Password" type="password" placeholder="Password" style={signUpInputField} required />
                    <TextField label="Confrim Password" type="password" placeholder=" Confirm Password" style={signUpInputField} required />
                </Grid>
                <Grid>
                    <TextField label="Department" placeholder="Add Department Here..." style={signUpInputField} required />
                </Grid>
                <Grid>
                    <FormControlLabel 
                        control={
                            <Checkbox
                               
                                name="checkBox"
                                color='primary'
                            />
                        }
                        label="Do you argee to the Terms of Service?"
                        style={{paddingTop: 10}}
                    />
                </Grid>
                <Link align="center" to='/'>
                    <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}}>
                            Sign In
                    </Button>
                </Link>
                <Typography style={signUpInputField}>
                    <Link to='/' style={{color: '#2F4050'}}  >
                        Have a Account? Sign In Here!
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )

}

export default SignUp;