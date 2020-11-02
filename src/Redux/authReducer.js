//action
import { SET_USER_DATA, setUserData } from './authAction';

//initial state
let initialState = {
    payload: setUserData.SET_USER_DATA,
    login: '',
    isAuth: false,
    userUid: ''
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return Object.assign({}, state, {
                ...state,
                ...action.payload
            })
             
        default:
            return state
    }
};

export default authReducer;