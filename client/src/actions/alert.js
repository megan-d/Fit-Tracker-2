import { SET_ALERT, REMOVE_ALERT } from './types';
import { v4 as uuidv4 } from 'uuid';

//Want to be able to dispatch more than one action type from this function. Can add dispatch to do this. Able to do this because of Thunk middleware.
export const setAlert = (msg, alertType, timeout = 3000) => dispatch => {
    const id = uuidv4();
    //Call SET_ALERT. When this gets dispatched, the state will be sent down to the component that's calling it.
    dispatch({
        type: SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({
        type: REMOVE_ALERT,
        payload: id
    }), timeout);
}