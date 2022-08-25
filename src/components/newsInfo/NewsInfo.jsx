import Styled from "./NewsInfo.module.css"
import { usePost } from "../../contexts/PostContext"
import { Link } from "react-router-dom"

const NewsInfo = () => {

    const { post, samePost } = usePost()

    return (
        <div className={Styled.Info}>
            <div className={Styled.Sticky}>
                <div className={Styled.PostByInfo}>
                    <div className={Styled.Image}>
                        <img className={Styled.LogoBackGround} src={post.userId.teamId.profilImage} alt="" />
                        <span>{post.userId.teamId.name}</span>
                    </div>
                    <button className={Styled.Follow}>Follow</button>
                    <div dangerouslySetInnerHTML={{ __html: post.userId.teamId.info }} />

                    <button className={Styled.Contribute}>Contribute to Forem</button>
                </div>
                <div className={Styled.MorePost}>
                    <div className={Styled.Title}>
                        <h3>
                            More from <span>The DEV Team</span>
                        </h3>
                    </div>
                    <div className={Styled.More}>
                        {samePost.samePost.map(({ title, tag, _id }) => {
                            return (
                                <Link key={_id} to={`/${_id}`}>
                                    <div className={Styled.Post_Opis}>
                                        <p className={Styled.TitleTag}>{title}</p>
                                        <div className={Styled.Tag}>
                                            {tag.map(({ tag }, index) => {
                                                return (
                                                    <p key={index}># {tag}</p>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsInfo