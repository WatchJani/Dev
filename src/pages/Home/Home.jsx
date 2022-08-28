import Styled from "./Home.module.css"
import { NewsContainer } from "../../components/container/news/newsContainer"
import { PostList, Menu, Info, HomeBanner } from "../../components/index"

const Home = () => {

    return (
        <>
            <HomeBanner />
            <NewsContainer>
                <nav className={Styled.Nav}>
                    <Menu />
                </nav>
                <div className={Styled.Content}>
                    <PostList />
                </div>
                <div className={Styled.Info}>
                    <Info />
                </div>
            </NewsContainer>
        </>
    )
}

export default Home