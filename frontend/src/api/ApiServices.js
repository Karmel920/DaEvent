import axios from "axios";

export const api = {
    login: data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, data)
    },
    register: data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/register`, data)
    },
    topics: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/topics`)
    },
    getMe: () => {
        const token = localStorage.getItem('token');
        return axios.get(`${process.env.REACT_APP_API_URL}/api/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    allTopics: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/all-topics`)
    },
    getAllProjects: page => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/projects?page=${page}`)
    },
    getUserProjects: ({ id, page }) => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/user-projects/${id}?page=${page}`)
    },
    getProjectById: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/project/${id}`)
    },
    getProjectsByTopic: ({ name, page }) => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/projects/${name}?page=${page}`)
    },
    getRecentActivities: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/recent-activities`)
    },
    getUserActivities: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/user-activities/${id}`)
    },
    getProjectActivities: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/project-activities/${id}`)
    },
    getParticipants: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/project-participants/${id}`)
    },
    getUserProfile: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/user-profile/${id}`)
    },
}