

import { Grid, makeStyles, Paper, TextField, } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import { useState } from "react";


import ProfileImage from "../../Components/ProfileImage/ProfileImage";
import Sidebar from "../../Components/Sidebar/Sidebar";


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
    PageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))


const EditProfile = () => {

    const classes = useStyles();

    const initialState = {
        firstName: '',
        lastName: '',
        admin: '',
        username: '',
        password: '',
        department: '',
        picture: '',
    }

    // State Handlers

    // For form
    const [value, setValue] = useState(initialState);

    // For Avaiable
    const [state, setState] = useState({
        gilad: true,
        jason: false,
        antoine: true,
    });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    // For Department
    const [department, setDepartment] = useState('');

    const handleDepartment = (event) => {
        setDepartment(event.target.value);
    };
      

    return (

        <div>

        <Sidebar/>

        <Paper className={classes.PageContent}>

            <ProfileImage/>

            <div className={classes.root}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="I'm looking for part time shifts"
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions2-content"
                    id="additional-actions2-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="I'm looking a full time shifts"
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography color="textSecondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions3-content"
                    id="additional-actions3-header"
                    >
                    <FormControlLabel
                        aria-label="Acknowledge"
                        onClick={(event) => event.stopPropagation()}
                        onFocus={(event) => event.stopPropagation()}
                        control={<Checkbox />}
                        label="I will accept overtime"
                    />
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography color="textSecondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>

            <form className={classes.root}>
                <Grid container style={{marginTop: '2em'}}>
                    <Grid item={6}>
                        <TextField variant="outlined" label="First Name" value={value.firstName} onChange={(e) => {
                            setValue(e.target.value)
                        }}/>
                        <TextField variant="outlined" label="Last Name" value={value.lastName} onChange={(e) => {
                            setValue(e.target.value)
                        }}/>
                    </Grid>
                    <Grid item={6}>
                        <TextField variant="outlined" label="Password" value={value.firstName} onChange={(e) => {
                            setValue(e.target.value)
                        }}/>
                        <TextField variant="outlined" label="Username" value={value.lastName} onChange={(e) => {
                            setValue(e.target.value)
                        }}/>
                    </Grid>
                    <Grid item={6}>
                        <TextField variant="outlined" label="Picture Url" value={value.firstName} onChange={(e) => {
                            setValue(e.target.value)
                        }}/>
                        <Grid
                            style={{paddingLeft: 12}}
                        >
                        <InputLabel id="demo-simple-select-label">Department</InputLabel>
                        <Select
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
                    </Grid>
                    <Grid xs={6}>
                        <FormControlLabel
                            control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
                            label="Available"
                        />
                    </Grid>
                </Grid>
            </form>
        </Paper>

        </div>
    )
}

export default EditProfile;