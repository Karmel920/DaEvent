import axios from "axios";

export const api = {
    login: data => {
        return axios.post(`${process.env.REACT_APP_API_URL}/api/token/`, data)
    },
    topics: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}/api/topics`)
    },
}