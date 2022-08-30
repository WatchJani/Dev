import { usePost } from "../../contexts/PostContext"
import Styled from "./NewsContent.module.css"
import Coment from "../Coment/Coment"
import { Link } from "react-router-dom"

const NewsContent = () => {

    const { post } = usePost()

    function getMonth(Month) {
        const month = (new Date(Month)).getMonth()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"]

        return months[month]
    }

    return (
        <div className={Styled.Content}>

            {/* banner */}
            <img className={Styled.Banner} src={post.banner} alt="" />

            {/* title, who is made, tagovi */}
            <div className={Styled.PostInfo}>
                {/* who is posted */}

                <div className={Styled.PostBy}>
                    <div className={Styled.Posted}>
                        <Link to={`/profil/${post.userId._id}`}>
                            <div className={Styled.Position}>
                                {post.userId.teamId ? <img className={Styled.LogoBackGround} src={post.userId.teamId.profilImage} alt="" /> : undefined}
                                {post.userId.teamId ? <img className={Styled.Logo} src={post.userId.profilImage} alt="" /> : <img className={Styled.JustUserImage} src={post.userId.profilImage} alt="" />}
                            </div>
                        </Link>
                    </div>
                    <div className={Styled.PostedText}>
                        {post.userId.teamId ? <p><Link to={`/profil/${post?.userId?._id}`}><b>{post.userId.userName}</b></Link> for <Link to={`/profil/${post.userId.teamId._id}`}><span>{post.userId.teamId.name}</span></Link></p> : <Link><p><b>{post.userId.userName}</b></p></Link>}
                        <p className={Styled.PostDate}>Posted on {getMonth(post.createAt)} {(new Date(post.createAt)).getDate()}</p>
                    </div>
                </div>

                {/* title */}
                <h1>{post.title}</h1>
                {/* tags */}

                <div className={Styled.Tags}>
                    {post.tag.map(({ _id, tag, hue, saturation }) => {
                        return (
                            <div key={_id}><span style={{ color: `hsl(${hue},${saturation}%,75%)` }}>#</span> {tag}</div>
                        )
                    })}
                </div>
            </div>


            {/* content */}
            <div className={Styled.Post} dangerouslySetInnerHTML={{ __html: post.post.replaceAll("&lt;", "<").replaceAll("&gt;", ">") }} />

            <Coment />

        </div>
    )
}

export default NewsContent