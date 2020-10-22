import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    credentials: 'include'
});

export const tasksAPI = {
    getTasks() {
        return (
            instance
                .get(`list`)
                .then(response => {
                    return response.data
                })
        )
    },

    addTasks(task) {
        return (
            instance
                .post(`list`, task)
                .then(response => {
                    return response.data
                })
        )
    },

    changeTasks(taskId, task) {
        return (
            instance
                .put(`list/${taskId}`, task)
                .then(response => {
                    return response.data
                })
        )
    },

    deleteTasks(taskId) {
        return (
            instance
                .delete(`list/${taskId}`)
                .then(response => {
                    // debugger
                    return response.data
                })
        )
    }
}


export const listsAPI = {
    getLists() {
        return (
            instance
                .get(`taskList`)
                .then(response => {
                    if (response.status == '200') {
                        return response.data
                    } else if (response.status == '404') {
                        console.log('404 Not Found')
                    }
                    
                })
        )
    },

    addLists(task) {
        return (
            instance
                .post(`taskList`, task)
                .then(response => {
                    return response.data
                })
        )
    },

    changeLists(taskId, task) {
        return (
            instance
                .patch(`taskList/${taskId}`, task)
                .then(response => {
                    return response.data
                })
        )
    },

    deleteLists(taskId) {
        return (
            instance
                .delete(`taskList/${taskId}`)
                .then(response => {
                    // debugger
                    return response.data
                })
        )
    }
}