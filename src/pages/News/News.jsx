import { NewsContainer } from '../../components/container/news/newsContainer'
import { NewsNav, NewsContent, NewsInfo } from "../../components"
import Styled from "./News.module.css"


const News = () => {
    return (
        <NewsContainer>
            <NewsNav />
            <div className={Styled.Flex}>
                <NewsContent />
                <NewsInfo />
            </div>
        </NewsContainer>
    )
}

export default News