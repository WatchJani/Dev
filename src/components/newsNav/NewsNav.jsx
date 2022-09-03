import Styled from "./NewsNav.module.css"
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useState, useEffect } from "react";
import { usePost } from "../../contexts/PostContext";
import axios from "../../utils/axiosBackend";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const NewsNav = () => {

    const navigate = useNavigate()
    const { post } = usePost()
    const user = useUser()

    const [like, setLike] = useState(post.like.length)
    const [save, setSave] = useState(post.save.length)
    const [support, setSupport] = useState(post.support.length)
    const [isLiked, setIsLiked] = useState(false)
    const [isSaved, setIsSaved] = useState(false)
    const [isSupported, setIsSupported] = useState(false)

    const likeHandle = () => {
        if (user.data) {
            setLike(isLiked ? like - 1 : like + 1)
            axios.put(`/post/like/${post._id}`)
            setIsLiked(!isLiked)
        } else {
            navigate("/login")
        }
    }

    const saveHandle = () => {
        if (user.data) {
            setSave(isSaved ? save - 1 : save + 1)
            axios.put(`/post/save/${post._id}`)
            setIsSaved(!isSaved)
        } else {
            navigate("/login")
        }
    }

    const supportHandle = () => {
        if (user.data) {
            setSupport(isSupported ? support - 1 : support + 1)
            axios.put(`/post/support/${post._id}`)
            setIsSupported(!isSupported)
        } else {
            navigate("/login")
        }
    }

    useEffect(() => {
        setIsLiked(post.like.includes(user.data ? user.data.user._id : null))
        setIsSupported(post.support.includes(user.data ? user.data.user._id : null))
        setIsSaved(post.save.includes(user.data ? user.data.user._id : null))
    }, [])

    return (
        <nav className={Styled.Nav}>
            <label htmlFor="HartButton" className={Styled.IconContainer}>

                {isLiked ? <button id="HartButton" className={Styled.ActiveHartButton} onClick={likeHandle}>
                    <svg fill="currentColor" className={Styled.Hart} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" >
                        <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                    </svg>
                </button> : <button id="HartButton" className={Styled.HartButton} onClick={likeHandle}>
                    <svg fill="currentColor" className={Styled.Hart} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true" >
                        <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"></path>
                    </svg>
                </button>}

                <p>{like}</p>
            </label>

            <label htmlFor="UnicornButton" className={Styled.IconContainer}>
                {isSupported ? <button id="UnicornButton" className={Styled.ActiveUnicornButton} onClick={supportHandle}>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-hidden="true" >
                        <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
                    </svg>
                </button> : <button id="UnicornButton" className={Styled.UnicornButton} onClick={supportHandle}>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" role="img" aria-hidden="true" >
                        <path d="M5.645 8.013c.013-.265-.261-.323-.4-.183-1.16 1.17-1.822 3.865-.344 7.32.294.961 1.938 3.19.84 6.131l-.003.006c-.094.255.206.404.366.263 1.395-1.226 1.933-3.593 1.1-6.375-.488-1.657-1.955-4.226-1.559-7.162zm-3.22 2.738c.05-.137-.124-.417-.326-.225-.939.893-1.316 2.863-.976 4.605.547 2.878 2.374 3.526 2.066 6.629-.028.102.176.38.348.154 1.546-2.033.409-4.453-.241-6.006-1.005-2.386-1.087-4.118-.871-5.157z"></path>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.622 7.223l8.579-3.68c.598-.256 1.087.547.6.985l-6.618 5.941c.881 2.043 2.738 6.34 2.931 6.775 1.348 3.031-2.055 4.918-3.807 3.583a7.027 7.027 0 01-.623-.574c-.974-.965-2.419-2.398-5.207-1.877.284-2.115-.313-3.737-.883-5.288-.38-1.032-.747-2.032-.837-3.124-.346-3.329 3.763-8.23 4.696-7.953.386.115.326 1.229.266 2.319-.051.948-.102 1.88.143 2.12.145.142.428.43.76.773zM11.5 16.5l2.5.5 2.5 2 1-.5-2-4.5-1.5-4-1.5-1-1-1-1-1.5L10 8l-.5 1.5 1 2.5 1 4.5z"></path>
                    </svg>
                </button>}

                <p>{support}</p>
            </label>

            <label htmlFor="SaveButton" className={Styled.IconContainer}>
                {isSaved ? <button id="SaveButton" className={Styled.ActiveSaveButton} onClick={saveHandle}>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                    </svg>
                </button> : <button id="SaveButton" className={Styled.SaveButton} onClick={saveHandle}>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"></path>
                    </svg>
                </button>}
                <p>{save}</p>
            </label>

            <button className={Styled.MoreButton}>
                <MoreHorizIcon />
            </button>
        </nav>
    )
}

export default NewsNav