// action
import { SORT_LISTS_BY_COUNT, SET_LIST, setLists } from './listAction'

// initial state
const initialState = {
    lists: setLists.SET_LIST
};


// reducer
const listReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return Object.assign({}, state, {
                ...state,
                lists: action.lists
            })

        case SORT_LISTS_BY_COUNT:
            debugger
            let value = action.lists;
            let filteredLists = value.filter(task => task.isNow)

            return Object.assign({}, state, {
                ...state,
                lists: filteredLists
            })

        default:
            return state;
    }
};

export default listReducer;
