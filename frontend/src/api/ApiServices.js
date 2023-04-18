import axios from "axios";

export const api = {
    login: data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, data)
    },
    topics: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/topics`)
    },
    allTopics: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/all-topics`)
    },
    getAllProjects: page => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/projects?page=${page}`)
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
    getProjectActivities: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/project-activities/${id}`)
    },
    getParticipants: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/project-participants/${id}`)
    },
}