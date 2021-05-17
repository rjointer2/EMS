
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

                <Toolbar>
                    <Typography variant="h6" color="primary">
                        Home
                    </Typography>
                </Toolbar>

                <Box style={home_screen_main}>
                    <Typography>
                        Management Stories
                    </Typography>
                </Box>

                <Container maxWidth='lg' style={{paddingTop: '3em'}} >

                    <Typography variant='h4' style={{paddingBottom: '3em'}}>
                        What's New
                    </Typography>

                    {/* Stories */}

                    <Grid container spacing={3}>
                        
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                                </Typography>
                                <Typography variant="h5" component="h2">
                                be{bull}nev{bull}o{bull}lent
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                adjective
                                </Typography>
                                <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
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
                                    Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    be{bull}nev{bull}o{bull}lent
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
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
                                    Word of the Day
                                    </Typography>
                                    <Typography variant="h5" component="h2">
                                    be{bull}nev{bull}o{bull}lent
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                    adjective
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                    well meaning and kindly.
                                    <br />
                                    {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Grid>

            </Container>
        </div>
    )
}

export default HomeScreen;