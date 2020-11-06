// consts
export const SET_LIST = 'SET-LIST';
export const SORT_BY_ISNOW = 'SORT-BY-ISNOW';
export const SORT_LISTS_BY_COUNT = 'SORT-LISTS-BY-COUNT';

// action creators
export const setLists = (lists) => ({ type: SET_LIST, lists });
export const sortListsByIsNow = (lists) => ({type: SORT_LISTS_BY_COUNT, lists});

// thunk creators
export function sortByCountTC(uid) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        let responseArray = [];

        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList/')
            .orderByChild('task')
            .on('value', (elem) => {
                elem.forEach(function(child) {
                    let response  = child.val();
                    responseArray.push(response)
                    dispatch(setLists(responseArray))
                })
            })
    }
}



export function getListsTC(uid) {
    return (dispatch, getState, getFirebase) => {

        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .on('value', (elem) => {
                let response = elem.val();
                dispatch(setLists(response))
            })
    }
};

export function deleteListsTC(uid, id) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .child(id)
            .remove()
    }
};

export function updateListsTC(uid, list) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        let id = list.id;
        var updates = {};
        updates[id] = list
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .update(updates);
    }
};

export function addListsTC(uid, list) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        getFirebase()
            .database()
            .ref(uid)
            .child('taskList');
        var newKey = getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .push()
            .key;
        var updates = {};
        list.id = newKey;
        updates[newKey] = list;
        return getFirebase()
            .ref(uid)
            .child('taskList')
            .update(updates);
    }
}

export function changeIsNowListsTC(uid, list) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        let id = list.id;
        var updates = {};
        updates[id] = list
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .update(updates);
    }
};