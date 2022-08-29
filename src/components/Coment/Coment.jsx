import Styled from "./Coment.module.css"
import { useState, useEffect, useReducer } from "react"
import { usePost } from "../../contexts/PostContext"
import axios from "../../utils/axiosBackend"
import { useUser } from "../../contexts/UserContext"

const Coment = () => {

    const { post } = usePost()

    const status = useUser()

    console.log("user", status.data.user.profilImage)
    const [reduceValue, forceUpdate] = useReducer(x => x + 1, 0)

    function getMonth(Month) {
        const month = (new Date(Month)).getMonth()
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Avg", "Sep", "Oct", "Nov", "Dec"]

        return months[month]
    }

    const [message, setMessage] = useState()
    const [data, setData] = useState([])

    const AddComment = () => {
        if (message.length > 0) {
            axios.post(`/post/commentar/${post._id}`, { message: message }).then(() => {
                forceUpdate()
            })
        }
    }

    useEffect(() => {
        axios.get(`/post/commentar/${post._id}`).then((data) => {
            setData(data.data)
        })

    }, [reduceValue])


    return (
        <>
            <hr className={Styled.line} />
            <div className={Styled.MessageArea}>
                <div className={Styled.HederMess}>
                    <h2>Discussion ({data.length})</h2>
                    <button>Subscribe</button>
                </div>
                <div className={Styled.MessageContainer}>
                    <img src={status.data.user.profilImage} alt={status.data.user.profilImage} />
                    <div className={Styled.Left}>
                        <textarea placeholder="Add to the Discussion " onChange={(e) => { setMessage(e.target.value) }} />
                        <button onClick={AddComment} >Submit</button>
                    </div>
                </div>
                {data.map((message, index) => {
                    return (
                        <div key={index} className={Styled.MessageContainer}>
                            <img src={message.userId.profilImage} alt="" />
                            <div className={Styled.CardMessage}>
                                <div className={Styled.Header}>
                                    <button>{message.userId.firstName} {message.userId.lastName} (@{message.userId.userName})</button>
                                    <span className={Styled.Dot}>•</span>
                                    <span>{(new Date(message.createAt)).getDate()} {getMonth(post.createAt)}</span>
                                </div>
                                <div className={Styled.Message}>
                                    <p>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Coment