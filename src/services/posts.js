import { makeRequest } from "./makeRequest"

export const getPosts = () => {
    return makeRequest("/post")
}

export const getPost = (id) => {
    return makeRequest(`/post/${id}`)
}

