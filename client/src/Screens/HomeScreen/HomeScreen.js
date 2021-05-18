
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import { home_screen_main } from './HomeScreenStyle.js';
/* import sidebar from '../../Components/Sidebar/Sidebar'


import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux' */

/* import { getUserLogin as displayUser } from '../../Redux/actions/loginActions'; */
import { Box, Card, Container, Typography, Grid} from '@material-ui/core';
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
                        What's New
                    </Typography>

                    <Typography style={{paddingBottom: '2em', fontSize: '.8em'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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