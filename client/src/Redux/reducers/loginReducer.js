
import * as actionTypes from '../constants/loginConstants';

// the action will be dispatched from the stre 
// the reducer will take a state that will be an empty array and an action

export const getLoginReducer = ( state = { userLoggedIn: []},  action ) => {

    // checking the actions's request
    switch(action.type){

        case actionTypes.GET_LOGIN_REQUEST: 
        return {
            // we send a property of loading as true and a empty 
            loading: true,
            userLoggedIn: []
        }
        case actionTypes.GET_LOGIN_SUCCESS:
        return {
            loading: false,
            // from our action function the action's payload return is a user 
            userLoggedIn: action.payload
        }
        case actionTypes.GET_LOGIN_REJECT:
        return {
            loading: false,
            // from our action function the action's payload return is a user 
            error: action.payload
        }


        // If not a user request then the array is not empty object
        default: 
        return state;
    }

}