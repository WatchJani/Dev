import { NewsContainer } from '../../components/container/news/newsContainer'
import { NewsNav, NewsContent, NewsInfo } from "../../components"
import Styled from "./News.module.css"

const data = { UnicornButton: 18, SaveButton: 106 }

const News = () => {
    return (
        <NewsContainer>
            <NewsNav data={data} />
            <div className={Styled.Flex}>
                <NewsContent />
                <NewsInfo />
            </div>
        </NewsContainer>
    )
}

export default News