// consts
export const SET_TASK = 'SET-TASK';
export const SORT_BY_ISNOW = 'SORT-BY-ISNOW';
export const SORT_BY_ISDONE = 'SORT-BY-ISDONE';

// action creators
export const setTasks = (tasks) => ({ type: SET_TASK, tasks });
export const sortTasksByIsNow = (tasks) => ({type: SORT_BY_ISNOW, tasks});
export const sortTasksByIsDone = (tasks) => ({type: SORT_BY_ISDONE, tasks});

// thunk creators
export function getTasksTC(uid, listId) {
    return (dispatch, getState, getFirebase) => {

        if (!uid) {
            uid = localStorage.getItem('uid')
        }

        if (!listId) {
            listId = localStorage.getItem('listId')
        }

        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .child(listId)
            .on('value', (elem) => {
                let response = elem.val();
                let tasks = response
                dispatch(setTasks(tasks))
            })
    }
};

export function deleteTasksTC(uid, listId, id) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .child(listId)
            .child('task')
            .child(id)
            .remove()
    }
};

export function checkTasksTC(uid, listId, task) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        var updates = {};
        let id = task.id
        updates[id] = task;
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .child(listId)
            .child('task')
            .update(updates)
    }
};

export function addTasksTC(uid, listId, task) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        var newKey = getFirebase()
            .database()
            .ref('task')
            .push()
            .key;

        var updates = {};
        task.id = newKey;
        updates[newKey] = task;
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .child(listId)
            .child('task')
            .update(updates)
    }
};

export function updateTasksTC(uid, listId, task) {
    return (dispatch, getState, getFirebase) => {
        if (!uid) {
            uid = localStorage.getItem('uid');
        }
        let id = task.id;
        var updates = {};
        updates[id] = task
        return getFirebase()
            .database()
            .ref(uid)
            .child('taskList')
            .child(listId)
            .child('task')
            .update(updates)
    }
};