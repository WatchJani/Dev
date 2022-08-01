import Styled from "./News.module.css"
import { NewsContainer } from '../../components/container/news/newsContainer'



const News = () => {
    return (
        <NewsContainer>
            <nav className={Styled.Nav}>d</nav>
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