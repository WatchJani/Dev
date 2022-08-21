import { makeRequest } from "./makeRequest"

export const getPosts = (skip) => {
    return makeRequest(`/post?skip=5`)
}

export const getPost = (id) => {
    return makeRequest(`/post/${id}`)
}

