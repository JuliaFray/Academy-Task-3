// API
import { listsAPI } from '../API/API';
import * as firebase from 'firebase';
import { isAsyncValidating } from 'redux-form';

// consts
const SET_LIST = 'SET-LIST';
const ADD_LIST = 'ADD-LIST';
const UPDATE_LIST_TEXT = 'UPDATE-LIST-TEXT';

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
export const getListsTC = () => async (dispatch) => {
    const db = firebase.database().ref('taskList');
    db.on('value', (elem) => {
        let response = elem.val();
        dispatch(setLists(response))
    })
};

export const deleteListsTC = (id) => async (dispatch) => {
    console.log(id)
    firebase.database().ref('taskList').child(id).remove();
    dispatch(getListsTC());
};

export const updateListsTC = (list) => async (dispatch) => {
    let id = list.id;
    var updates = {};
    updates[id] = list
    const db = firebase.database().ref('taskList').child(id).update(updates);
    dispatch(getListsTC());
};

export const addListsTC = (list) => async (dispatch) => {
    const db = firebase.database().ref('taskList');
    var newKey = firebase.database().ref('taskList').push().key;
    var updates = {};
    list.id = newKey;
    updates[newKey] = list;
    firebase.database().ref('taskList').update(updates);
    
    dispatch(getListsTC());
}