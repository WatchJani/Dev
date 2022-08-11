import React from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/posts'
import { useAsync } from '../../hooks/useAsync'
import Styled from "./PostList.module.css"
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


const PostList = () => {

    function getMonth(Month) {
        const month = (new Date(Month)).getMonth()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"]

        return months[month]
    }

    const { loading, error, value: posts } = useAsync(getPosts)


    if (loading) return <SkeletonLoading />

    if (error) return <p>{error}</p>

    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <Link to={post._id} key={post._id}>
                            <div className={Styled.PostCard}>
                                <div className={Styled.PostListProfilInfo}>
                                    <img className={Styled.PostListImageProfil} src="./images/profil.webp" alt="" />
                                    <div className={Styled.FlexDirection}>
                                        <button>{post.userId.userName}</button>
                                        <time>{getMonth(post.createAt)} {(new Date(post.createAt)).getDate()} ({formatDistanceToNow(new Date(post.createAt), { addSuffix: true })})</time>
                                    </div>
                                </div>
                                <div className={Styled.CardInfoContainer}>
                                    <span>{post.title}</span>
                                </div>
                                <div className={Styled.TagFlex}>
                                    <p>#programming</p>
                                    <p>#tutorial</p>
                                    <p>#performance</p>
                                </div>
                                <div className={Styled.Bottom}>
                                    <div className={Styled.ButtonFlex}>
                                        <button className={Styled.ButtonComand}>
                                            <svg width="18px" height="18px" viewBox="0 0 24 24" className={Styled.Likes} fill="currentColor" xmlns="http://www.w3.org/2000/svg"  >
                                                <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                                                </path>
                                            </svg>
                                            23 <span>Reactions</span>
                                        </button>
                                        <button className={Styled.ButtonComand}>
                                            <svg width="24px" height="24px" viewBox="0 0 24 24" className={Styled.Comments} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                                </path>
                                            </svg>
                                            4 <span>Comments</span>
                                        </button>
                                    </div>
                                    <div className={Styled.BoxTimeReading}>
                                        <p className={Styled.TimeForReading}>4 min read</p>
                                        <button className={Styled.RealButton}>Save</button>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default PostList