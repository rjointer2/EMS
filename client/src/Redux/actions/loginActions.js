
// We are importing ALL the constants ( types );

// depending now the if the login request is successful is how tell the
// store what happened

import * as actionTypes from '../constants/loginConstants';

// takes the user's login cred as a object from the useSelector on the login logic screen 
// and return a async function with a dispatch and action args getting
// it's state form the redux thunk by the getState method

export const getUserLogin = (login) => async (dispatch) => {

    try {

        dispatch({
            type: actionTypes.GET_USER_LOGIN_REQUEST
        })

        // REMEMBER TO CHANGE THE ROUTE IN THE REACT ROUTER TO HAVE A :username param
        const res = await fetch(`/api/users/login`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'

            },
            // Our server will compare user's creds and return a object if successful or
            // unsuccessful, we will dispatch will this action for our reducer to specify
            // to the store what happened and how to update the state
            body: JSON.stringify(login)
        })

        const data = await res.json();
        console.log(data)
       
        // Now if the request is successful we will tell the store what happened
        // by sending this object 
        dispatch({
            type: actionTypes.GET_LOGIN_SUCCESS,
            // we tell send this payload's property to the reducer on success
            // so we specify how the store's state should change
            payload: data
        })



    } catch(err) {
        
        // Now if the request is not unsuccessful we will tell the store what happened
        // by sending this object
        dispatch({
            type: actionTypes.GET_LOGIN_REJECT,
            // we will send this payload's property as an err to
            // describe to the reducer how the store's state should update
            payload: err
        })


    }
}

export const removeUserLogin = () => (dispatch) => {
        dispatch({
            type: actionTypes.GET_USER_LOGOUT_REQUEST
        })
}