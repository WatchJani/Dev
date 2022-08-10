import Styled from "./Home.module.css"
import { NewsContainer } from "../../components/container/news/newsContainer"
import { useEffect, useState } from "react"
import { getPost } from "../../services/posts"
import { Link } from "react-router-dom"

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPost().then(setPosts)
    }, [])

    console.log(posts)

    return (
        <NewsContainer>
            <nav className={Styled.Nav}>d</nav>
            <div className={Styled.Content}>
                {posts.map((post) => {
                    return (
                        <Link to={post._id} key={post._id}>
                            <h1>{post.title}</h1>
                        </Link>
                    )
                })}
            </div>
            <div className={Styled.Info}>
                a
            </div>
        </NewsContainer>
    )
}

export default Home