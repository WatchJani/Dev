import Styled from "./Info.module.css"

const Info = () => {
    return (
        <>
            <div className={Styled.Container}>
                <div>
                    <img src="./images/baner.png" alt="" />
                </div>
                <p>
                    There's never been a better time to join the Redis x DEV hackathon...
                </p>
                <a href="https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248">→ Discover new chances to win & participate</a>
            </div>


            <div className={Styled.MorePost}>
                <div className={Styled.Title}>
                    <h3>
                        #meta
                    </h3>
                </div>
                <div className={Styled.More}>
                    <p className={Styled.TitleTag}>Redis x DEV Hackathon Help Thread</p>
                    <div className={Styled.Tag}>
                        <p>35 comments</p>
                    </div>
                </div>
                <div className={Styled.More}>
                    <p className={Styled.TitleTag}>Community Discussion Thread — Redis x DEV Hackathon</p>
                    <div className={Styled.Tag}>
                        <p>68 comments</p>
                    </div>
                </div>
                <div className={Styled.More}>
                    <p className={Styled.TitleTag}>Follow Friday: UX/UI Edition (29 July 2022)</p>
                    <div className={Styled.Tag}>
                        <p>89 comments</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info