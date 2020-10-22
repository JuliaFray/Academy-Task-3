// API
import { tasksAPI } from './../API/API';

// consts
const SET_TASK = 'SET-TASK';
const ADD_TASK = 'ADD-TASK';
const UPDATE_TASK_TEXT = 'UPDATE-TASK-TEXT';
const ADD_LIST = 'ADD-LIST';

// initial state
const initialState = {
    tasks: [
        { id: 1, taskText: 'write 1 task', done: 'true', priority: 'high' },
        { id: 2, taskText: 'check 1 task', done: 'false', priority: 'medium' }
    ],

    newTaskText: '',

    lists: [
        { id: 1, listText: 'first list' },
        { id: 2, listText: 'second list' }
    ]
};


// reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                tasks: action.tasks
            }
        case ADD_TASK:
            // debugger
            let newTask = {
                id: 3,
                taskText: action.newTaskText,
                priority: action.priority
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

        case ADD_LIST:
            let newList = {
                id: 3,
                listText: action.newListText
            };
            return {
                ...state,
                lists: [...state.lists, newList]
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
export const getTasksTC = () => async (dispatch) => {
    let response = await tasksAPI.getTasks();
    dispatch(setTasks(response))
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