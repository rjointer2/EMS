
// get all the exported variables as a variable called

import * as actionTypes from '../constants/scheduleConstants';

// For the actions we will fetch the logged in user's schedule and 
// to display them in the Schedule page

// Our action creator will get the user by the jwt we received
// then dispatch this action to our reducor to give a constant 
// update the state

export const getScheduleRequest = () => async (dispatch) => {

    try {

        // we will communicate to the store that we want request the
        // the schedule
        dispatch({
            type: actionTypes.GET_SCHEDULE_REQUEST
        })

        // this is sorry accessable to logged in users 
        // and on every get request we get a user object 
        // in the server only 
        const res = await fetch('/app/users/authUser');

        // on success of we should get the schedule object
        const data = await res.json();

        // now we can communicate to the reducer that request is successful and
        // the state should be a non empty of the schedule prop from the user object
        dispatch({
            type: actionTypes.GET_SCHEDULE_SUCCESS,
            // our state object should be object with the id and schedule proptery
            // this state object will have it's id property used for the 
            // cart schedule actions
            payload: data
        })

    } catch(err) {

        // on failure of the request we have to communicate the request failed
        dispatch({
            type: actionTypes.GET_SCHEDULE_FAILURE,
            // we will send a err for the reducer
            payload: err

        })

    }

}


    // The schedule should be a array of objects the props 
    // "Day", "Time Schedule", 'Attendence', and "Status"



