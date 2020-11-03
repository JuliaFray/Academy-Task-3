// action
import { SET_LIST, setLists } from './listAction'

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
            
        default:
            return state;
    }
};

export default listReducer;
