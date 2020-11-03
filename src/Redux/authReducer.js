//action
import { SET_IS_AUTH, SET_USER_DATA, setUserData } from './authAction';

//initial state
let initialState = {
    payload: setUserData.SET_USER_DATA,
    login: '',
    isAuth: setUserData.SET_IS_AUTH,
    userUid: ''
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // debugger
            return Object.assign({}, state, {
                ...state,
                ...action.payload
            })

        case SET_IS_AUTH:
            return Object.assign({}, state, {
                ...state,
                isAuth : action.isAuth
            })
             
        default:
            return state
    }
};

export default authReducer;