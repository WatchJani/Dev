import Styled from "./NewsInfo.module.css"
import { usePost } from "../../contexts/PostContext"

const NewsInfo = () => {

    const { post } = usePost()

    console.log(post)

    return (
        <div className={Styled.Info}>
            <div className={Styled.Sticky}>
                <div className={Styled.PostByInfo}>
                    <div className={Styled.Image}>
                        <img className={Styled.LogoBackGround} src={post.userId.teamId.profilImage} alt="" />
                        <span>{post.userId.teamId.name}</span>
                    </div>
                    <button className={Styled.Follow}>Follow</button>
                    <p>The hardworking team behind dev.to ❤️</p>
                    <div>
                        <p>Want to contribute to open source and help make the DEV community stronger?</p>
                        <p>The code that powers DEV is called <b>Forem</b> and is freely available on GitHub.</p>
                        <p>You're welcome to jump in!</p>
                    </div>
                    <button className={Styled.Contribute}>Contribute to Forem</button>
                </div>
                <div className={Styled.MorePost}>
                    <div className={Styled.Title}>
                        <h3>
                            More from <span>The DEV Team</span>
                        </h3>
                    </div>
                    <div className={Styled.More}>
                        <p className={Styled.TitleTag}>Redis x DEV Hackathon Help Thread</p>
                        <div className={Styled.Tag}>
                            <p>#redishackathon</p>
                            <p>#redis</p>
                            <p>#help</p>
                        </div>
                    </div>
                    <div className={Styled.More}>
                        <p className={Styled.TitleTag}>Community Discussion Thread — Redis x DEV Hackathon</p>
                        <div className={Styled.Tag}>
                            <p>#discuss</p>
                            <p>#redishackathon</p>
                            <p>#redis</p>
                        </div>
                    </div>
                    <div className={Styled.More}>
                        <p className={Styled.TitleTag}>Follow Friday: UX/UI Edition (29 July 2022)</p>
                        <div className={Styled.Tag}>
                            <p>#meta</p>
                            <p>#ux</p>
                            <p>#ui</p>
                            <p>#design</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsInfo