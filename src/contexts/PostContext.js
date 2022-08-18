import React, { useContext } from "react"
import { useAsync } from "../hooks/useAsync"
import { getPost } from "../services/posts"
import { useParams } from "react-router-dom"
import SkeletonLoadingNews from "../components/SkeletonLoading/SkeletonLoadingNews"

const Context = React.createContext()

export const usePost = () => {
    return useContext(Context)
}

const PostProvider = ({ children }) => {

    const { news } = useParams()

    const { loading, error, value: post } = useAsync(() => getPost(news), [news])

    if (loading) return <SkeletonLoadingNews />

    if (error) return <p>{error}</p>

    return (
        <Context.Provider value={{
            post: {
                ...post
            }
        }}>{children}</Context.Provider>
    )
}

export default PostProvider