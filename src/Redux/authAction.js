//consts
export const SET_USER_DATA = 'SET-USER-DATA';
export const SET_IS_AUTH = 'SET-IS-AUTH';

//action creators
export const setUserData = (login, isAuth, userUid) => ({
    type: SET_USER_DATA,
    payload: { login, isAuth, userUid }
});

export const setIsAuth = (isAuth) => ({ type: SET_IS_AUTH, isAuth })

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
                localStorage.setItem('uid', user.uid);
                localStorage.setItem('isAuth', 'true');
                localStorage.setItem('login', login)
                dispatch(setUserData(login, true, user.uid));
                // dispatch(setIsAuth(true))
            }
        }
    }
}

export function logoutTC() {
    return (dispatch, getState, getFirebase) => {
        return getFirebase()
            .auth()
            .signOut()
            .then(() => {
                localStorage.setItem('uid', '');
                localStorage.setItem('isAuth', 'false');
                localStorage.setItem('login', '')
                dispatch(setUserData('', false, ''));
            })
    }
}

export function regTC(login, password) {
    return (dispatch, getState, getFirebase) => {
        debugger
        return getFirebase()
            .auth()
            .createUserWithEmailAndPassword(login, password)
            .then(() => {
                dispatch(loginTC(login, password))
            })
    }
}