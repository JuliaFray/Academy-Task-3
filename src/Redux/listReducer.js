// API
import { listsAPI } from '../API/API';
import * as firebase from 'firebase';

// consts
const SET_LIST = 'SET-LIST';
const ADD_LIST = 'ADD-LIST';
const UPDATE_LIST_TEXT = 'UPDATE-LIST-TEXT';

// initial state
const initialState = {
    lists: [
        {
            id: 0, taskListName: "firstTaskList",
            task: [
                {
                    id: 1,
                    taskName: "write 1 task",
                    isDone: "true",
                    isNow: "high"
                },

                {
                    taskName: "Chek all tasks",
                    isNow: "high",
                    isDone: "true",
                    id: 2
                },
                {
                    taskName: "repair task adding",
                    isNow: "medium",
                    isDone: "true",
                    id: 3
                },
                {
                    taskName: "clear input",
                    isNow: "low",
                    isDone: "true",
                    id: 4
                }
            ]
        },
        {
            id: 1, taskListName: "secondTaskList",
            task: [
                {
                    id: 1,
                    taskName: "write 1 task",
                    isDone: "true",
                    isNow: "high"
                },
                {
                    taskName: "Chek all tasks",
                    isNow: "high",
                    isDone: "true",
                    id: 2
                }
            ]
        }
    ],

    newListText: ''
};


// reducer
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                lists: action.lists
            }
        case ADD_LIST:
            // debugger
            let newList = {
                id: 3,
                listText: action.newListText
            };
            return {
                ...state,
                lists: [...state.lists, newList]
            }

        case UPDATE_LIST_TEXT:

            return {
                ...state,
                newListText: action.newListText
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
    firebase.database().ref('taskList').child(id).remove();
    dispatch(getListsTC());
};

export const updateListsTC = (list) => async (dispatch) => {
    let id = list.id;

    // const db = firebase.database().ref('taskList');
    // db.once('value', (elem) => {
    //     var response = elem.val().length;

    //     let updates = {};
    //     updates[id] = list;
    //     firebase.database().ref('taskList').child(id).update(updates);
    // });

    await listsAPI.changeLists(id, list);
    dispatch(getListsTC());
};

export const addListsTC = (list) => async (dispatch) => {

    const db = firebase.database().ref('taskList');
    db.once('value', (elem) => {
        var response = elem.val().length;
        console.log(response);
        list.id = response;
        let updates = {};
        updates[response] = list;
        firebase.database().ref('taskList').update(updates);
    });


    dispatch(getListsTC());
}