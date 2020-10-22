// API
import { listsAPI } from '../API/API';

// consts
const SET_LIST = 'SET-LIST';
const ADD_LIST = 'ADD-LIST';
const UPDATE_LIST_TEXT = 'UPDATE-LIST-TEXT';

// initial state
const initialState = {
    lists: [
        { id: 0, taskListName: "firstTaskList",
            task : [
                {   id: 1,
                    taskText: "write 1 task",
                    done: "true",
                    priority: "high" },

                {   taskText: "Chek all tasks",
                    priority: "high",
                    done: "true",
                    id: 2 },
                {   taskText: "repair task adding",
                    priority: "medium",
                    done: "true",
                    id: 3 },
                {   taskText: "clear input",
                    priority: "low",
                    done: "true",
                    id: 4 }
            ]
        },
        {   id: 1, taskListName: "secondTaskList",
            task: [
                {   id: 1,
                    taskText: "write 1 task",
                    done: "true",
                    priority: "high"
                },
                {   taskText: "Chek all tasks",
                    priority: "high",
                    done: "true",
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
// export const addTask = (task) => ({ type: ADD_TASK, task });
// export const updateLText = (newTaskText) => ({ type: UPDATE_TASK_TEXT, newTaskText });


// thunk creators
export const getListsTC = () => async (dispatch) => {
    let response = await listsAPI.getLists();
    dispatch(setLists(response))
};

export const deleteListsTC = (id) => async (dispatch) => {
    await listsAPI.deleteLists(id);
    dispatch(getListsTC());
};

export const checkListsTC = (id, list) => async (dispatch) => {
    await listsAPI.changeLists(id, list);
    dispatch(getListsTC());
};

export const addListsTC = (list) => async (dispatch) => {
    await listsAPI.addLists(list);
    dispatch(getListsTC());
};