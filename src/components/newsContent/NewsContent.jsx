import Styled from "./NewsContent.module.css"

const NewsContent = () => {
    return (
        <div className={Styled.Content}>


            {/* banner */}
            <img className={Styled.Banner} src="./images/banner.webp" alt="" />



            {/* title, who is made, tagovi */}
            <div className={Styled.PostInfo}>
                {/* who is posted */}
                <div>

                </div>

                {/* title */}
                <h1>Announcing the Redis Hackathon on DEV!</h1>
                {/* tags */}

                <div>
                    
                </div>
            </div>


            {/* content */}
            <div className={Styled.Post}>
                <p>Hello, dear DEV community!</p>
                <p>
                    We wanted to stop by and let you in on some exciting news:
                    today, we’re launching a new way for you to build an interesting
                    application in the open, learn something new, and win exciting
                    prizes in the process…
                </p>
                <h3>Announcing the Redis Hackathon on DEV 🎉</h3>
                <p>
                    If you’re familiar with our hackathons here on DEV,
                    you know that the community has a lot of fun with them
                    and gets pretty creative with what they build. Whether
                    you’ve joined us in the past or not, we hope you’ll
                    throw your hat into the ring by participating in the
                    Redis Hackathon on DEV!
                </p>
                <p>
                    Keep reading to get all the details on how you can enter this contest, more about Redis, and the prizes they’re offering our community.
                </p>
            </div>
        </div>
    )
}

export default NewsContent