
import { useState } from "react";
import { Link } from "react-router-dom";
import useFormState from "../../../Hooks/useFormState";

const { Grid, Paper, Avatar, TextField, Typography, Checkbox, Button, FormControlLabel, InputLabel, Select, MenuItem, makeStyles, Modal } = require("@material-ui/core")
const { ArrowUpwardOutlined } = require("@material-ui/icons")
const { signUpContainer, signUpInputField, flexItems } = require("./SignUpStyles")

const SignUp = () => {

    function rand() {
        return Math.round(Math.random() * 20) - 10;
      }
      
      function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
      }
      
      const useStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
      }));

      const classes = useStyles();
        // getModalStyle is not a pure function, we roll the style only on the first render
        const [modalStyle] = useState(getModalStyle);
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };


        const body = (
            <div style={modalStyle} className={classes.paper}>
            <h2>Oh no!</h2>
            <p>
                Make sure input fields<br/>
                are filed out and passwords<br/>
                match...
            </p>
            </div>
        );

    // set Modal

    const { username, setUsername ,admin, setAdmin ,lastName, setLastname, firstName, setFirstName, department, handleDepartment, confirmPassword, setConfirmPassword, password, setPassword } = useFormState();
    
    // TOS 
    const [agree, setAgree] = useState(false);

    // form checks

    const validiateFormSubmission = () => {


        // check is the confirmPassword and password
        // the states values aren't falsy
        // for right now password security isn't important
        // the user must check the TOS

        if(!username) {
            handleOpen()
            return false;
        }

        if(agree === false) {
            handleOpen()
            return false;
        }

        if(confirmPassword !== password) {
            handleOpen()
            return false
        }

        console.log('passed');
        window.location.replace('/')

    }

    return (
        
        <Grid >

            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
            
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
                    <TextField label="First Name" value={firstName} style={signUpInputField} required onChange={(e) => {
                        setFirstName(e.target.value)
                    }}/>
                    <TextField label="Last Name" value={lastName} style={signUpInputField} required onChange={(e) => {
                        setLastname(e.target.value)
                    }}/>
                </Grid>
                <Grid align="center" style={flexItems}>
                    <FormControlLabel 
                        control={
                            <Checkbox
                               onClick={() => {
                                    admin ? setAdmin(false) : setAdmin(true)
                               }}
                                name="checkBox"
                                color='primary'
                            />
                        }
                        label="Are You A Manager?"
                        style={{paddingTop: 10}}
                    />
                </Grid>
                <Grid>
                    <TextField label="Username" value={username} style={signUpInputField} onChange={(e) => {
                        setUsername(e.target.value)
                    }} required />
                    <TextField label="Password" value={password} style={signUpInputField} required onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <TextField label="Confirm Password" value={confirmPassword} style={signUpInputField} onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }} required />
                </Grid>
                <Grid>
                        <InputLabel style={{textAlign: 'left', paddingLeft: '5em'}} id="demo-simple-select-label">Department</InputLabel>
                        <Select
                            style={{width: '57%'}}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={department}
                            onChange={handleDepartment}
                            >
                            <MenuItem value='Service and Engagement'>Service and Engagement</MenuItem>
                            <MenuItem value='FulFullment'>FulFullment</MenuItem>
                            <MenuItem value='Gen Merch'>Gen Merch</MenuItem>
                            <MenuItem value='Market'>Market</MenuItem>
                            <MenuItem value='Apperal'>Apperal</MenuItem>
                        </Select>
                        </Grid>
                <Grid>
                    <FormControlLabel 
                        control={
                            <Checkbox
                            onClick={() => {
                                agree ? setAgree(false) : setAgree(true)
                           }}
                                name="checkBox"
                                color='primary'
                            />
                        }
                        label="Do you argee to the Terms of Service?"
                        style={{paddingTop: 10}}
                    />
                </Grid>
                <Button type="submit" fullWidth variant="contained" style={{backgroundColor: "#2F4050", color: 'white'}} onClick={() => { 
                        validiateFormSubmission()
                    }}>
                            Sign In!
                            
                </Button>
                <Typography style={signUpInputField}>
                    <Link style={{color: '#2F4050'}}>
                        Have a Account? Sign In Here!
                    </Link>
                </Typography>
            </Paper>
        </Grid>

    )

}

export default SignUp;