import Styled from "./HomeBanner.module.css"

const HomeBanner = () => {
    return (
        <div className={Styled.MyContainer}>
            <div className={Styled.Text}>
                <h4>Open through August 29, 2022</h4>
                <h1>There's still time to join the Redis Hackathon on DEV!

                </h1>
                <h2>
                    Build an application using Redis for your chance to win up to $2,200 USD in cash, swag, & more!
                </h2>
                <a href="https://dev.to/devteam/announcing-the-redis-hackathon-on-dev-3248"><h3>Learn More & Enter</h3></a>
            </div>
        </div>
    )
}

export default HomeBanner