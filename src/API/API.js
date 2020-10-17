import * as axios from 'axios';

const instance = axios.create({
    baseURL: ''
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

    addTasks() {
        return (
            instance
                .post(`list`)
                .then(response => {
                    return response.data
                })
        )
    },

    changeTasks(taskId) {
        return (
            instance
                .put(`list/${taskId}`)
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
                    return response.data
                })
        )
    }
}