
// We are importing ALL the constants ( types )

import * as actionTypes from '../constants/loginConstants';

// takes the user's login cred as a object from the useSelector on the login logic screen 
// and return a async function with a dispatch and action args getting
// it's state form the redux thunk by the getState method

export const getUserLogin = async (login, dispatch) => {

    try {

        // REMEMBER TO CHANGE THE ROUTE IN THE REACT ROUTER TO HAVE A :username param
        const res = await fetch(`/api/users/login/${username}`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            // Our server will compare user's creds and return a object if successful or
            // unsuccessful, we will dispatch will this action for our reducer to specify
            // to the store what happened and how to update the state
            body: JSON.stringify(login)
        })

        const data = res.json();

        console.log(data)

    } catch(err) {

    }
}