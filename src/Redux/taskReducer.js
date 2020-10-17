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
        {id: 1, taskText: 'write 1 task'},
        {id: 2, taskText: 'check 1 task'}
    ],

    newTaskText: '',

    lists: [
        {id: 1, listText: 'first list'},
        {id: 2, listText: 'second list'}
    ]
};


// reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return {
                ...state,
                // tasks
            }
        case ADD_TASK: 
            let newTask = {
                id: 3,
                taskText: action.newTaskText
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
    }
};

export default taskReducer;

// action creators
// export const setTasks = () => ({type: SET_TASK, tasks});


// thunk creators
export const getTasksTC = () => {
    return async (dispatch) => {
        dispatch();
        let response = await tasksAPI.getTasks();
        dispatch()
    }
}