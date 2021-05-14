
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { LogoutStyles } from './logoutStyle'


const Logout = () => {

    return (
        <Grid>
            <Paper elevation={10} style={LogoutStyles} align="center"> 
                <Grid>
                    <Avatar style={{backgroundColor: '#2F4050'}}>
                        <LockOutlined />
                    </Avatar>
                    <br/>
                    <Typography variant="h5">
                        Logged out
                    </Typography>
                </Grid>
            </Paper>
        </Grid>
    )

}

export default Logout 