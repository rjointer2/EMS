
import * as actionTypes from '../constants/scheduleCartsConstants';

// we want to going to take the shift's chat id and make a request
// to the server and update our cart

export const addToSheduleCart = (id) => async (dispatch) => {

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
    })

}