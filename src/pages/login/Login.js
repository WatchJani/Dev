import Styled from "./Login.module.css"
import { useState } from "react";
import axios from "../../utils/axiosBackend"
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spiner/Spiner'

const Login = () => {

    let navigate = useNavigate();

    const [loading, setLoading] = useState();
    const [error, setError] = useState()

    const [data, setData] = useState({
        email: "",
        password: "",

    })

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    if (loading) return <Spinner />;


    const Submit = (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();

        formData.append("email", data.email)
        formData.append("password", data.password)


        axios.post("user/register", formData)
            .then((data) => {
                navigate("/", { replace: true })
                console.log(data)
            }).catch((err) => {
                setError(err.response.data.message);
                setLoading(false);
            })
    }

    return (
        <form onSubmit={Submit} className={Styled.Form}>
            <h1>Welcome to DEV Community</h1>
            <p className={Styled.SubTitle}>DEV Community is a community of 891,187 amazing developers</p>
            <input type="text" name='email' placeholder='First Name' onChange={onChange} />
            <input type="password" name='password' placeholder='Last Name' onChange={onChange} />

            {error && <p className={Styled.Error}>{error}</p>}
            <button className={Styled.Publish}>Continue</button>
        </form>
    )
}

export default Login