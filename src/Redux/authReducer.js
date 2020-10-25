//API
import * as firebase from 'firebase';

//consts
const SET_USER_DATA = 'SET-USER-DATA';

//initial state
let initialState = {
    login: '',
    isAuth: false
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            // debugger
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

export const loginTC = (login, password) => async (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(login, password)
        .catch(error => {
            console.log(error)
        });

        firebase.auth().onAuthStateChanged(function(user) {
            console.log(user)
            if (user) {
                if (user.email == login) {
                    dispatch(setUserData(login, true))
                }
            } else {
                dispatch(setUserData('', false))
            }
        })

    

};

export const logoutTC = () => async (dispatch) => {
    firebase.auth().signOut().then(function() {
        dispatch(setUserData('', false));
    })
}