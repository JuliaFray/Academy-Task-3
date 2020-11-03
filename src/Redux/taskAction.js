// consts
export const SET_TASK = 'SET-TASK';

// action creators
export const setTasks = (tasks) => ({ type: SET_TASK, tasks });

// thunk creators
export function getTasksTC(uid, listId) {
    return (dispatch, getState, getFirebase) => {

        if (!uid) {
            uid = localStorage.getItem('uid')
        }

        // console.log(uid)
        // console.log(listId)

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