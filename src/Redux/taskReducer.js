// API
import { tasksAPI } from './../API/API';
import * as firebase from 'firebase';

// consts
const SET_TASK = 'SET-TASK';
const ADD_TASK = 'ADD-TASK';
const UPDATE_TASK_TEXT = 'UPDATE-TASK-TEXT';

// initial state
const initialState = {
    tasks: [
    ]
};


// reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            // debugger
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
// export const addTask = (task) => ({ type: ADD_TASK, task });
export const updateTaskText = (newTaskText) => ({ type: UPDATE_TASK_TEXT, newTaskText });


// thunk creators
export const getTasksTC = (listId) => async (dispatch) => {

    const db = firebase.database().ref('taskList/');
    db.on('value', (elem) => {
        let response = elem.val();
        let tasks = response[listId]
        dispatch(setTasks(tasks))
    })
};

export const deleteTasksTC = (id) => async (dispatch) => {
    firebase.database().ref('task').child(id).remove();
    dispatch(getTasksTC());
};

export const checkTasksTC = (id, task) => async (dispatch) => {
    var updates = {};
    updates[id] = task;
    firebase.database().ref('task').child(id).update(updates);
    // await tasksAPI.changeTasks(id, task);
    dispatch(getTasksTC());
};

export const addTasksTC = (listId, task) => async (dispatch) => {
    var newKey = firebase.database().ref('task').push().key;
    var updates = {};
    task.id = newKey;
    updates[newKey] = task;
    console.log(listId)
    firebase.database().ref('taskList').child(listId).child('task').update(updates);
    
    // dispatch(getTasksTC());
};