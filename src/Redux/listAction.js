// API
import * as firebase from 'firebase';

// consts
const SET_LIST = 'SET-LIST';

// initial state
const initialState = {
    lists: [{}]
};


// reducer
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            // debugger
            return {
                ...state,
                lists: action.lists
            }
            
        default:
            return state;
    }
};

export default listReducer;

// action creators
export const setLists = (lists) => ({ type: SET_LIST, lists });

// thunk creators
export const getListsTC = (uid) => async (dispatch) => {
    const db = firebase.database().ref(uid).child('taskList');
    db.on('value', (elem) => {
        
        let response = elem.val();
        // console.log(response)
        dispatch(setLists(response))
    })
};

export const deleteListsTC = (uid, id) => async (dispatch) => {
    console.log(id)
    firebase.database().ref(uid).child('taskList').child(id).remove();
    // dispatch(getListsTC());
};

export const updateListsTC = (uid, list) => async (dispatch) => {
    // debugger
    let id = list.id;
    var updates = {};
    updates[id] = list
    firebase.database().ref(uid).child('taskList').update(updates);
    // dispatch(getListsTC());
};

export const addListsTC = (uid, list) => async (dispatch) => {
    firebase.database().ref(uid).child('taskList');
    var newKey = firebase.database().ref(uid).child('taskList').push().key;
    var updates = {};
    list.id = newKey;
    updates[newKey] = list;
    firebase.database().ref(uid).child('taskList').update(updates);
    
    // dispatch(getListsTC());
}