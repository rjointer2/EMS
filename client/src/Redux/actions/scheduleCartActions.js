
import * as actionTypes from '../constants/scheduleCartsConstants';

// we want to going to take the shift's chat id and make a request
// to the server and update our cart and save this state in the 
// user's browser storage

export const addToShiftCart = (id) => async (dispatch, getState) => {

    // tell the store on the request to fetch a schedule cart
    // this is isn't a post request, the admin has to approve this 
    // action, we are just returning a read only state array

    const res = await fetch(`/app/shifts/${id}`);
    const data = await res.json();

    dispatch({
        // we are indeed one shift to our cart but we will add this object into
        // a state object's array
        type: actionTypes.ADD_TO_SCHEDULE_CART,
        payload: {
            // id, timeSchedule, request, comments, status, employeeID
            id: data.id,
            timeSchedule: data.timeSchedule,
            request: data.request,
            comments: data.comments,
            status: data.status,
            employeeID: data.employeeID,
        }
    });

    // we can add the satte array into localStorage
    // Now the getState's property shift is what our reducer's key is 
    // So get the state's value "shift", and the prop array ( shiftCart )
    localStorage.setItem('_emsShiftCart', JSON.stringify(getState().shift))

}

export const removeShiftFromCart = (id) => (dispatch) => {


    dispatch({
        // telling the reducer this action 
        type: actionTypes.REMOVE_TO_SCHEDULE_CART,
        // we will remove the shift by it's id
        payload: id
    });

    // we will rewrite the key in the browser's with the new state array
    localStorage.setItem('_emsShiftCart', JSON.stringify(getState().shift).shiftItems)

}


export const sendRequestToAdmin = () => async (dispatch) => {

    const request = localStorage.getItem('_emsShiftCart')

    dispatch({
        type: actionTypes.SEND_SCHEDULE_CART_TO_ADMIN,
        // we will keep the payload as a string for the database
        payload: request
    })

}


/* 

    THE NEXT TWO WILL BE THE RESETING CART
    AND SENDING THE REQUEST TO THE ADMIN

*/