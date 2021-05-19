
import * as actionTypes from '../constants/scheduleConstants';

// this will have the schedule as a object and how to dispatch it with the action arg

export const scheduleRudecer = (state = { schedule: {}}, action ) => {

    switch(action.type) {

        case actionTypes.GET_SCHEDULE_REQUEST: 
        return {
            fetching: true,
            schedule: {}
        }

        case actionTypes.GET_SCHEDULE_SUCCESS:
        return {
            fetching: false,
            // This will be, we will parse it on the front end
            schedule: action.payload
        }

        case actionTypes.GET_SHIFT_DETAILS_FAILURE:
        return {
            fetching: false,
            // in the schedule, have a check for falsy values
            schedule: {}
        }

        default: return state

    }

}