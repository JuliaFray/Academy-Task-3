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
        case ADD_TASK:
            // debugger
            let newTask = {
                id: 3,
                taskName: action.newTaskText,
                isNow: action.isNow
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            }

        case UPDATE_TASK_TEXT:

            return {
                ...state,
                newTaskText: action.newTaskText
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


    // let response = await tasksAPI.getTasks();
    // dispatch(setTasks(response))
};

export const deleteTasksTC = (id) => async (dispatch) => {
    await tasksAPI.deleteTasks(id);
    dispatch(getTasksTC());
};

export const checkTasksTC = (id, task) => async (dispatch) => {
    await tasksAPI.changeTasks(id, task);
    dispatch(getTasksTC());
};

export const addTasksTC = (task) => async (dispatch) => {
    await tasksAPI.addTasks(task);
    dispatch(getTasksTC());
};