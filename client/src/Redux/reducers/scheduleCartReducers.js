
import * as actionTypes from '../constants/scheduleCartsConstants';

// this reducer will specifies how the store's shift state should update

// the args taken will be a state array of empty shift items and a action dispatched

export const shiftReducer = ( state = { shiftItems: [] }, action ) => {

    switch(action.type) {
        
        case actionTypes.ADD_TO_SCHEDULE_CART: 
            // we store the action's payload dispatched form the acion 
            // creator as a shift variable
            const shift = action.payload;

            // using the find method we get a falsy value or the first element 
            // to tell if the item exist 

            // if the shift exist
        

        default: return state
    }

}