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