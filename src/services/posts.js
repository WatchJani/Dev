import { makeRequest } from "./makeRequest"

export const getPost = () => {
    return makeRequest("/post")
}