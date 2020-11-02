//consts
export const SET_USER_DATA = 'SET-USER-DATA';

//action creators
export const setUserData = (login, isAuth, userUid) => ({
    type: SET_USER_DATA,
    payload: { login, isAuth, userUid }
});

//thunk creators
export function loginTC(login, password) {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .auth()
            .signInWithEmailAndPassword(login, password)
            .then(() => {
                dispatch(checkCurrentUser(login))
            })
    }
};

function checkCurrentUser(login) {
    return (dispatch, getState, getFirebase) => {
        var user = getFirebase()
            .auth()
            .currentUser;
        if (user) {
            if (user.email === login) {
                dispatch(setUserData(login, 'true', user.uid))
            }
        }
    }
}

export function logoutTC() {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .auth()
            .signOut()
            .then(function () {
                dispatch(setUserData('', false));
            })
    }
}

export function regTC(login, password) {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .auth()
            .createUserWithEmailAndPassword(login, password)
            .then(() => {
                dispatch(loginTC(login, password))
            })
    }
}