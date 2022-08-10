import axios from "../utils/axiosBackend"

export const makeRequest = (url, options) => {
    return axios(url, options)
        .then(res => res.data)
        .catch(error => Promise.reject(error?.response?.data?.message ?? "Error"))
}