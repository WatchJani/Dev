import React, { useState } from 'react'
import axios from "../../utils/axiosBackend"
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spiner/Spiner'
import Styled from "./Register.module.css"
import { Link } from 'react-router-dom'

const Register = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState();
  const [error, setError] = useState()

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    profil: "",
    email: "",
    password: ""
  })

  const Submit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append("firstName", data.firstName)
    formData.append("lastName", data.lastName)
    formData.append("userName", data.userName)
    formData.append("upload", data.profil)
    formData.append("email", data.email)
    formData.append("password", data.password)


    axios.post("user/register", formData)
      .then((data) => {
        navigate("/login", { replace: true })
        console.log(data)
      }).catch((err) => {
        setError(err.response.data.message);
        setLoading(false);
      })
  }

  const onChange = (e) => {
    if (e.target.name === 'profil')
      setData({ ...data, [e.target.name]: e.target.files[0] });
    else setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={Submit} className={Styled.Form}>
      {loading && <Spinner />}
      <h1>Welcome to DEV Community</h1>
      <p className={Styled.SubTitle}>DEV Community is a community of 891,187 amazing developers</p>
      <input type="text" name='firstName' placeholder='First Name' onChange={onChange} />
      <input type="text" name='lastName' placeholder='Last Name' onChange={onChange} />
      <input type="text" name='userName' placeholder='User Name' onChange={onChange} />
      <input type="text" name='email' placeholder='E-mail' onChange={onChange} />
      <input type="password" name='password' placeholder='Password' onChange={onChange} />
      <label className={Styled.UploadFile} htmlFor="banner">Add a profil image</label>
      <input style={{ display: "none" }} type="file" name="profil" id="banner" onChange={onChange} />

      {error && <p className={Styled.Error}>{error}</p>}
      <button className={Styled.Publish}>Register</button>
      <div className={Styled.Login}>
        <p className={Styled.Absolut}>Already have an account?</p><Link to="/login">Log in.</Link>
      </div>
    </form>
  )
}

export default Register