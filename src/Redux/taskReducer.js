//action
import { SET_TASK, setTasks } from './taskAction'

// initial state
const initialState = {
    tasks: setTasks.SET_TASK
};

// reducer
const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASK:
            return Object.assign({}, state, {
                ...state,
                tasks: action.tasks.task
            })

        default:
            return state;
    }
};

export default taskReducer;