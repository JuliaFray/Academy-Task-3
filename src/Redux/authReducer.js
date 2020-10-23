//API
import * as firebase from 'firebase';

//consts
const SET_USER_DATA = 'SET-USER-DATA';

//initial state
let initialState = {
    login: null,
    isAuth: false
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
};

export default authReducer;

//action creators
export const setUserData = (login, isAuth) => ({
    type: SET_USER_DATA,
    payload: { login, isAuth }
});

//thunk creators
// export const authTC = (loginName) => async (dispatch) => {
//     let response = await authAPI.me();
//     let { login } = response.data.me;
//     if (login == loginName) {
//         dispatch(setUserData(login, true));
//     } else {
//         dispatch(setUserData(null, false));
//     }
// };

export const loginTC = (login, password) => async (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(login, password)
        .catch(error => console.log(error));
    dispatch(setUserData(login, true));

};

export const logoutTC = () => async (dispatch) => {
    dispatch(setUserData(null, false));
}