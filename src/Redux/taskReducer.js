// API
import * as firebase from 'firebase';

// consts
const SET_TASK = 'SET-TASK';

// initial state
const initialState = {
    tasks: [
    ]
};


// reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: action.tasks.task
            }

        default:
            return state;
    }
};

export default taskReducer;

// action creators
export const setTasks = (tasks) => ({ type: SET_TASK, tasks });

// thunk creators
export const getTasksTC = (uid ,listId) => async (dispatch) => {

    const db = firebase.database().ref(uid).child('taskList');
    db.on('value', (elem) => {
        let response = elem.val();
        console.log(response)
        let tasks = response[listId]
        dispatch(setTasks(tasks))
    })
};

export const deleteTasksTC = (uid, listId, id) => async (dispatch) => {
    firebase.database().ref(uid).child('taskList').child(listId).child('task').child(id).remove();
};

export const checkTasksTC = (uid, listId, task) => async (dispatch) => {
    var updates = {};
    let id = task.id
    updates[id] = task;
    firebase.database().ref(uid).child('taskList').child(listId).child('task').update(updates)
};

export const addTasksTC = (uid ,listId, task) => async (dispatch) => {
    var newKey = firebase.database().ref('task').push().key;
    var updates = {};
    task.id = newKey;
    updates[newKey] = task;
    firebase.database().ref(uid).child('taskList').child(listId).child('task').update(updates);
};

export const updateTasksTC = (uid,listId, task) => async (dispatch) => {
    let id = task.id;
    var updates = {};
    updates[id] = task
    firebase.database().ref(uid).child('taskList').child(listId).child('task').update(updates);
};