
import Sidebar from '../../Components/Sidebar/Sidebar';
import './HomeScreen.css';

import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getUserLogin as displayUser } from '../../Redux/actions/loginActions';


const HomeScreen = () => {

    // Dispatch will work with the allActions imported from the actions folder.
    /* const dispatch = useDispatch();

    const getUserLogin = useSelector( state => state.getUserLogin )
    const { error, loading, userLoggedIn } = getUserLogin;

    useEffect(() => {
        dispatch(displayUser({username: 'tom'}))
    }) */

    useEffect(() => {
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
    })

    return (
        <div>
            <Sidebar /> 
            Home

            {/* TESTING IF THE HOME STAYS LOGGED OUT AFTER LOGGING */}



        </div>
    )
}

export default HomeScreen;