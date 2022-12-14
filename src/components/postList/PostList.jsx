import React, { useEffect } from 'react'
import Styled from "./PostList.module.css"
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useInfiniteQuery } from 'react-query'
import axios from '../../utils/axiosBackend'
import { useUser } from '../../contexts/UserContext'
import { Link } from 'react-router-dom'

const PostList = () => {
    const user = useUser()



    const fetchRepositories = async (page = 0) => {
        return axios.get(`/post?skip=${page * 5}`)
    }

    const { data, isLoading, isError, error, hasNextPage, fetchNextPage } = useInfiniteQuery(
        "repositories",
        ({ pageParam }) => fetchRepositories(pageParam),
        {
            getNextPageParam: (lastPage, allPages) => {
                const maxPages = lastPage.data.total_count / 5
                const nextPage = allPages.length
                return nextPage <= maxPages ? nextPage : undefined
            }
        }
    )

    function getMonth(Month) {
        const month = (new Date(Month)).getMonth()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"]
        return months[month]
    }

    useEffect(() => {
        let fetching = false
        const onScroll = async (event) => {
            const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement

            if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
                fetching = true
                if (hasNextPage) await fetchNextPage()
                fetching = false
            }
        }

        document.addEventListener("scroll", onScroll)
        return () => {
            document.removeEventListener("scroll", onScroll)
        }
    }, [data])



    if (isLoading) return <SkeletonLoading />

    if (isError) return <p>{error}</p>


    return (
        <div className={Styled.Sve}>
            {
                data.pages.map((page) =>
                    page.data.items.map((post, index) => (
                        <Link to={post._id}>
                            <div key={post._id} className={Styled.PostCard}>
                                <img src={post.banner} alt={post.banner} className={index == 0 ? "Img" : "NoImg"} />
                                <div className={Styled.PaddingPost}>
                                    <div className={Styled.PostListProfilInfo}>
                                        {post.userId.teamId ?
                                            <div className={Styled.RelativeImage}>
                                                <img className={Styled.PostListImageTeam} src={post.userId.teamId.profilImage} alt={post.userId.teamId.profilImage} />
                                                <img className={Styled.PostListImageProfilTeam} src={post.userId.profilImage} alt={post.userId.profilImage} />
                                            </div> : <img className={Styled.PostListImageProfil} src={post.userId.profilImage} alt={post.userId.profilImage} />}
                                        <div className={Styled.FlexDirection}>
                                            <button>{post.userId.userName}</button>
                                            <time>{getMonth(post.createAt)} {(new Date(post.createAt)).getDate()} ({formatDistanceToNow(new Date(post.createAt), { addSuffix: true })})</time>
                                        </div>
                                    </div>
                                    <div className={Styled.CardInfoContainer}>
                                        <span>{post.title}</span>
                                    </div>

                                    <div className={Styled.TagFlex}>
                                        {post.tag.map(({ _id, tag, hue, saturation }) => {
                                            return (
                                                <p className='tag' key={_id}><span style={{ color: `hsl(${hue},${saturation}%,75%)` }}>#</span> {tag}</p>
                                            )
                                        })}
                                    </div>

                                    <div className={Styled.Bottom}>
                                        <div className={Styled.ButtonFlex}>
                                            <button className={Styled.ButtonComand}>
                                                <svg width="18px" height="18px" viewBox="0 0 24 24" className={Styled.Likes} fill="currentColor" xmlns="http://www.w3.org/2000/svg"  >
                                                    <path d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z">
                                                    </path>
                                                </svg>
                                                {post.like.length} <span>Reactions</span>
                                            </button>
                                            <button className={Styled.ButtonComand}>
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" className={Styled.Comments} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z">
                                                    </path>
                                                </svg>
                                                0 <span>Comments</span>
                                            </button>
                                        </div>
                                        <div className={Styled.BoxTimeReading}>
                                            <p className={Styled.TimeForReading}>{post.timeToRead} min read</p>
                                            <button className={Styled.RealButton}>{post.save.includes(user?.data?.user?._id) ? <p>saved</p> : <p>save</p>}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                )
            }
        </div>
    )
}

export default PostList