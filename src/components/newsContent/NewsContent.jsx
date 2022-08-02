import Styled from "./NewsContent.module.css"

const NewsContent = () => {
    return (
        <div className={Styled.Content}>


            {/* banner */}
            <img className={Styled.Banner} src="./images/banner.webp" alt="" />



            {/* title, who is made, tagovi */}
            <div className={Styled.PostInfo}>
                {/* who is posted */}
                <div className={Styled.PostBy}>
                    <div className={Styled.Posted}>
                        <div className={Styled.Position}>
                            <img className={Styled.LogoBackGround} src="./images/logo.webp" alt="" />
                            <img className={Styled.Logo} src="./images/logoIspod.webp" alt="" />
                        </div>
                    </div>
                    <div className={Styled.PostedText}>
                        <p><b>dev.to staff</b> for <span>The DEV Team</span></p>
                        <p className={Styled.PostDate}>Posted on Aug 1</p>
                    </div>
                </div>

                {/* title */}
                <h1>Announcing the Redis Hackathon on DEV!</h1>
                {/* tags */}

                <div className={Styled.Tags}>
                    <div>#redishackathon</div>
                    <div>#redis</div>
                    <div>#meta</div>
                    <div>#database</div>
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
                <hr />
                <h3>Why Participate? What's so interesting about Redis beyond caching?</h3>
                <p>
                    Redis is the most loved open source database in the world! Over the last
                    several years Redis has evolved from a caching database into a <b>multi-model
                        primary database</b>. This means your cache is now your database, and your
                    database is your cache!
                </p>
                <p>Secondly, because it’s multi-model, you can use it for collecting billions of
                    events (like Kafka), storing JSON documents (like MongoDB), querying and
                    indexing your data (like Algolia or Elasticsearch), analyzing time series
                    data (like InfluxDB), and recommending (like Neo4j) – you can do it all
                    in a single system and do it fast.
                </p>
                <p>
                    <b>Redis gives you unprecedented flexibility to build anything you want,
                        or just simplify a complex backend that has multiple data systems
                        (Kafka + MongoDB + Algolia + InfluxDB + Neo4j + AnalyticsDB) with
                        just a single system (Redis).</b>
                </p>
                <p>
                    Furthermore, if you are using a <b>microservices architecture</b>,
                    you can use Redis to connect all those services and process requests and
                    responses blazing fast in both parallel or in-order fashion.
                </p>
                <p>
                    For this hackathon, you’ll be building a new app that uses many of these capabilities
                    or migrate an existing OSS demo app and show reduced complexity and improved
                    performance.
                </p>
                <p>
                    <b>
                        P.S. Want to get a sense of the benefits of Redis before you get started? Take a look at this 6 minute video:
                    </b>
                </p>
                <iframe src="https://www.youtube.com/embed/vyxdC1qK4NE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default NewsContent