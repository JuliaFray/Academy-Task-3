//action
import { SORT_BY_ISDONE, SORT_BY_ISNOW, SET_TASK, setTasks } from './taskAction'

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

        case SORT_BY_ISNOW:
            let value = action.tasks;
            let filteredTasks = value.filter(task => task.isNow)

            return Object.assign({}, state, {
                ...state,
                tasks: filteredTasks
            })

        case SORT_BY_ISDONE:
            let valueIsDone = action.tasks;
            let filteredTasksIsDone = valueIsDone.filter(task => !task.isDone)

            return Object.assign({}, state, {
                ...state,
                tasks: filteredTasksIsDone
            })

        default:
            return state;
    }
};

export default taskReducer;