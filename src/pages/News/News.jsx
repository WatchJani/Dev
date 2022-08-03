import { NewsContainer } from '../../components/container/news/newsContainer'
import { NewsNav, NewsContent, NewsInfo } from "../../components"

const data = { HartButton: 96, UnicornButton: 18, SaveButton: 106 }

const News = () => {
    return (
        <NewsContainer>
            <NewsNav data={data} />
            <NewsContent />
            <NewsInfo />
        </NewsContainer>

    )
}

export default News