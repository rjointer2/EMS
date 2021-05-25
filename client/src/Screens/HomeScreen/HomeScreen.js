
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { home_screen_main } from './HomeScreenStyle.js';
import sidebar from '../../Components/Sidebar/Sidebar'


import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getUserLogin as displayUser } from '../../Redux/actions/loginActions';
import { Box, Card, Container, Toolbar, Typography, Grid} from '@material-ui/core';
import Sidebar from '../../Components/Sidebar/Sidebar';



const HomeScreen = () => {

    // Dispatch will work with the allActions imported from the actions folder.
    /* const dispatch = useDispatch();

    const getUserLogin = useSelector( state => state.getUserLogin )
    const { error, loading, userLoggedIn } = getUserLogin;

    useEffect(() => {
        dispatch(displayUser({username: 'tom'}))
    }) */

    /* useEffect(() => {
        (async () => {

            const res = await fetch('/api/users/test', {
                mode: 'cors',
                headers: {
                    "access-token": localStorage.getItem('apptoken'),
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            })

            const data = await res.json()

            console.log(data)
        })()
    }) */

    // styles for card is

    const useStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
      });

      const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            <Sidebar />
                {/* Title and backgorund photo */}

               

                <Box style={home_screen_main}>
                    <Typography variant='h3'>
                       Welcome Back, {'User!'}
                    </Typography>
                </Box>

                <Container maxWidth='lg' style={{paddingTop: '3em'}} >

                    <Typography variant='h4' style={{paddingBottom: '.8em'}}>
                        Abstract of the EMS App
                    </Typography>

                    <Typography style={{paddingBottom: '2em', fontSize: '.8em'}}>
                    We help small businesses improve their business Return on Investment (ROI) and employee productivity by providing world-class Employee Management System App to manage their employees with in efficient and effective manner. Obviously, managing employees’ information manually poses numerous challenges especially their shift management, edit profile management etc. To solve that problem every organization needs a fully computerized employee management system using new web technologies. Keeping in mind the above real world company challenges we a small team of 2 students only developed an app by using the following advanced web technologies. 
Node, ReactJS, Redux, React Redux, React Thunk Middleware, Material UI, Express, Express-Session, JWT, BcryptJS, MySQL and Sequelize ORM, ClearDB.
                    </Typography>

                    {/* Stories */}

                    <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Lorem Ispum
                                </Typography>
                                <Typography variant="h5" component="h2">
                                Consectueur elit
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                Lorem...
                                </Typography>
                                <Typography variant="body2" component="p">
                                Massa enim nec dui nunc mattis enim ut tellus. Ac tortor dignissim convallis aenean et.  
                                <br />
                                
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                        
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Shift Management
                                </Typography>
                                <Typography variant="h5" component="h2">
                                Consectueur elit
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                Lorem...
                                </Typography>
                                <Typography variant="body2" component="p">
                                In many organizations, it's often a difficult and thankless job to schedule employees in their various shifts. The individual in charge of this task needs to think long and hard before placing workers into their various time slots. When done successfully, productivity is maximized and sales are not overrun by labor costs. Week after week, month and month, this task needs to be repeated again and again. This can become a tedious and error-prone process if done manually using paper and pencil or a spreadsheet.  
                                <br />
                                
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                        <Grid item xs={12} sm={6} md={4}>

                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Edit Profile
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Consectueur elit
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    Lorem...
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    Edit and add your employees and manage their information to make sure their profiles are organized to fit your needs. In addition to their contact information, your employees’ profiles contain their assigned schedules, positions, salaries and wage information.
.  
                                    <br />
                                    
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>

                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    JWT Authentication - Secure Your React and Redux App 
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    Consectueur elit
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    Lorem...
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                Redux is a state container for JavaScript applications by Dan Abramov that lets us have an expectable unidirectional data flow. It offers some benefits over other libraries like Flux, but works in similar ways. In this we implemented how to add JWT authentication to a Redux app. 

                                    <br />
                                    
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Grid>

                    <Typography align="center" style={{
                        fontSize: '.8em',
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas sed tempus urna et. Massa enim nec dui nunc mattis enim ut tellus. Augue lacus viverra vitae congue eu consequat ac. 
                        <br/><br/>
                        Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Vestibulum lectus mauris ultrices eros in cursus turpis. Non arcu risus quis varius quam quisque id diam vel. Massa placerat duis ultricies lacus sed turpis tincidunt id. 
                    </Typography>

            </Container>
        </div>
    )
}

export default HomeScreen;