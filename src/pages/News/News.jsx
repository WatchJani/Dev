import Styled from "./News.module.css"
import { NewsContainer } from '../../components/container/news/newsContainer'
import { NewsNav, NewsContent } from "../../components"

const data = { HartButton: 96, UnicornButton: 18, SaveButton: 106 }

const News = () => {
    return (
        <NewsContainer>
            <NewsNav data={data} />
            <NewsContent />
            <div className={Styled.Info}>

            </div>
        </NewsContainer>

    )
}

export default News