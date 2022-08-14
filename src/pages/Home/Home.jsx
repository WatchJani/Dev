import Styled from "./Home.module.css"
import { NewsContainer } from "../../components/container/news/newsContainer"
import PostList from "../../components/postList/PostList"
import PhoneMenu from "../../components/navigation/Menu"

const Home = () => {



    return (
        <NewsContainer>
            <nav className={Styled.Nav}>
                <PhoneMenu/>
            </nav>
            <div className={Styled.Content}>
                <PostList />
            </div>
            <div className={Styled.Info}>
                a
            </div>
        </NewsContainer>
    )
}

export default Home