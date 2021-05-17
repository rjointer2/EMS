
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
                            <Card>
                                Something Cool
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                Something Cool
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                Something Cool
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={6} md={4}>
                            <Card>
                                Something Cool
                            </Card>
                        </Grid>

                    </Grid>

            </Container>
        </div>
    )
}

export default HomeScreen;