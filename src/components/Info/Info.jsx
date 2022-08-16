import Styled from "./Info.module.css"


const data = [
    {
        title: "#meta",
        card: [
            {
                text: "Redis x DEV Hackathon Help Thread",
                comments: "35 comments"
            },
            {
                text: "Community Discussion Thread — Redis x DEV Hackathon",
                comments: "68 comments"
            },
            {
                text: "Follow Friday: UX/UI Edition (29 July 2022)",
                comments: "89 comments"
            }
        ]
    },
    {
        title: "#discuss",
        card: [
            {
                text: "We are trending on Github, This is how we did it 🤯",
                comments: "16 comments"
            },
            {
                text: "Hello, World!",
                comments: "1 comments"
            },
            {
                text: "What text editor should I use? ⌨️",
                comments: "2 comments"
            }
        ]
    }
]

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

            {data.map(({ title, card }, index) =>
                <div className={Styled.MorePost} key={index}>
                    <div className={Styled.Title}>
                        <h3>
                            {title}
                        </h3>
                    </div>
                    {card.map(({ text, comments }, index) =>
                        <div className={Styled.More} key={index}>
                            <p className={Styled.TitleTag}>{text}</p>
                            <div className={Styled.Tag}>
                                <p>{comments}</p>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default Info