import { makeRequest } from "./makeRequest"


export const createUser = () => {
    return makeRequest("/register")
}

export const loginUser = () => {
    return makeRequest("/login")
}