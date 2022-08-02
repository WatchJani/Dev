import Styled from "./News.module.css"
import { NewsContainer } from '../../components/container/news/newsContainer'
import { NewsNav } from "../../components"

const data = { HartButton: 96, UnicornButton: 18, SaveButton: 106 }

const News = () => {
    return (
        <NewsContainer>
            <NewsNav data={data} />
            <div className={Styled.Content}>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam autem debitis quaerat deserunt voluptatem adipisci nulla recusandae reprehenderit, eum odio, officia aut corrupti aliquam, quod provident officiis optio. Doloribus, eum.
                </p>
            </div>
            <div className={Styled.Info}>

            </div>
        </NewsContainer>

    )
}

export default News