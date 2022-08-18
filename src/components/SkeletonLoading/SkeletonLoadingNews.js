import Styled from "./SkeletonLoadingNews.module.css"
import { NewsContainer } from "../container/news/newsContainer"


const SkeletonLoadingNews = () => {
    return (
        <>
            <NewsContainer>
                <div className={Styled.Nav}>d</div>
                <div className={Styled.Flex}>
                    <div className={Styled.Content}>
                        {/* <div className="box-skeleton">
                            <div className="header">
                                <div className="image skeleton"></div>
                                <div className="text1">
                                    <div className="skeleton skeleton-text"></div>
                                    <div className="skeleton skeleton-text"></div>
                                </div>
                            </div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                            <div className="skeleton skeleton-text"></div>
                        </div> */}
                        <div className="skeleton video"></div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eligendi debitis, inventore maiores magnam a assumenda esse sint doloremque explicabo animi corrupti ipsam sunt, ea voluptas quibusdam numquam? Numquam, pariatur?
                    </div>
                    <div className={Styled.Info}>moze</div>
                </div>
            </NewsContainer>
           
        </>
    )
}

export default SkeletonLoadingNews