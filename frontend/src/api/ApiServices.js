import axios from "axios";

export const api = {
    login: data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, data)
    },
    register: data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/register`, data)
    },
    createProject: data => {
        const token = localStorage.getItem('token');
        return axios.post(`${process.env.REACT_APP_API_URL}/api/create-project`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    updateProject: ({data, id}) => {
        const token = localStorage.getItem('token');
        return axios.post(`${process.env.REACT_APP_API_URL}/api/update-project/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    updateUser: data => {
        const token = localStorage.getItem('token');
        const formData = new FormData();
        formData.append('avatar', data.avatar);
        formData.append('full_name', data.full_name);
        formData.append('bio', data.bio);
        return axios.post(`${process.env.REACT_APP_API_URL}/api/update-user`, formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    changePassword: data => {
        const token = localStorage.getItem('token');
        return axios.post(`${process.env.REACT_APP_API_URL}/api/change-password`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    addUserToProject: id => {
        const token = localStorage.getItem('token');
        return axios.post(`${process.env.REACT_APP_API_URL}/api/add-user-to-project/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    addCommentToProject: ({data, id}) => {
        const token = localStorage.getItem('token');
        return axios.post(`${process.env.REACT_APP_API_URL}/api/add-comment/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    topics: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/topics`)
    },
    topicsByName: name => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/topics/${name}`)
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
    getUserProjects: ({id, page}) => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/user-projects/${id}?page=${page}`)
    },
    getProjectById: id => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/project/${id}`)
    },
    getProjectsByTopic: ({name, page}) => {
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
    deleteUser: id => {
        const token = localStorage.getItem('token');
        return axios.delete(`${process.env.REACT_APP_API_URL}/api/delete-user/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    deleteProject: id => {
        const token = localStorage.getItem('token');
        return axios.delete(`${process.env.REACT_APP_API_URL}/api/delete-project/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    deleteComment: id => {
        const token = localStorage.getItem('token');
        return axios.delete(`${process.env.REACT_APP_API_URL}/api/delete-comment/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
}