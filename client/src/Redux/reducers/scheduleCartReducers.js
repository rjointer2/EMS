
import * as actionTypes from '../constants/scheduleCartsConstants';

// this reducer will specifies how the store's shift state should update

// the args taken will be a state array of empty shift items and a action dispatched

export const scheduleCartReducer = ( state = { shiftItems: [] }, action ) => {

    switch(action.type) {
    case actionTypes.ADD_TO_SCHEDULE_CART: 
        // we store the action's payload dispatched form the acion 
        // creator as a shift variable
        const shift = action.payload;

        // using the find method we get a falsy value or the first element 
        // to tell if the item exist 
        const existignShift = state.shiftItems.find((i) => i.id === shift.id);

        // if the shift exist we want to spread the state and copy it into
        // the existing array
        if(existignShift) {
            return {
                ...state,
                // if the id is found then we want to set that current item to 
                // the array's list ( action's payload ) or current shift
                shiftItems: state.map((x) => x.id === existignShift.id ? shift : x )
            }
        } else {
            // if it's the first time added to the array 
            return {
                ...state,
                // push the new shift in the array the state's prop
                shiftItems: [ ...state.shiftItems, shift ]
            }
        }
            
        case actionTypes.REMOVE_TO_SCHEDULE_CART: 
        return {
            ...state,
            // the shift's item property will be a new array without that
            // actions load
            shiftItems: state.shiftItems.filter((i) => i.id !== action.payload)
        }

        case actionTypes.RESET_TO_SCHEDULE_CART:
        return {
            // for reseting the cart just return a empty array
            shiftItems: []
        }
            

        default: return state
    }

}