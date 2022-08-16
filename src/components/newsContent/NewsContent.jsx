import { usePost } from "../../contexts/PostContext"
import Styled from "./NewsContent.module.css"

const NewsContent = () => {

    const { post } = usePost()

    function getMonth(Month) {
        const month = (new Date(Month)).getMonth()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"]

        return months[month]
    }



    console.log(post)

    return (
        <div className={Styled.Content}>

            {/* banner */}
            <img className={Styled.Banner} src={post.banner} alt="" />

            {/* title, who is made, tagovi */}
            <div className={Styled.PostInfo}>
                {/* who is posted */}
                <div className={Styled.PostBy}>
                    <div className={Styled.Posted}>
                        <div className={Styled.Position}>
                            <img className={Styled.LogoBackGround} src="./images/logo.webp" alt="" />
                            <img className={Styled.Logo} src={post.userId.profilImage} alt="" />
                        </div>
                    </div>
                    <div className={Styled.PostedText}>
                        <p><b>{post.userId.userName}</b> for <span>{post.userId.teamId.name}</span></p>
                        <p className={Styled.PostDate}>Posted on {getMonth(post.createAt)} {(new Date(post.createAt)).getDate()}</p>
                    </div>
                </div>

                {/* title */}
                <h1>{post.title}</h1>
                {/* tags */}

                <div className={Styled.Tags}>
                    <div>#redishackathon</div>
                    <div>#redis</div>
                    <div>#meta</div>
                    <div>#database</div>
                </div>
            </div>


            {/* content */}
            <div className={Styled.Post} dangerouslySetInnerHTML={{ __html: post.post }} />
        </div>
    )
}

export default NewsContent