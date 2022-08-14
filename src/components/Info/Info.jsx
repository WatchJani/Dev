import Styled from "./Info.module.css"

const Info = () => {
    return (
        <div className={Styled.Container}>
            <div>
                <img src="./images/baner.png" alt="" />
            </div>
            <p>
                There's never been a better time to join the Redis x DEV hackathon...
            </p>
            <a href="https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248">→ Discover new chances to win & participate</a>
        </div>
    )
}

export default Info