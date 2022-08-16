import React, { useState } from 'react'
import axios from "../../utils/axiosBackend"
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spiner/Spiner'
import Styled from "./Register.module.css"

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

  if (loading) return <Spinner />;

  return (
    <form onSubmit={Submit} className={Styled.Form}>
      <input type="text" name='firstName' placeholder='First Name' onChange={onChange} />
      <input type="text" name='lastName' placeholder='Last Name' onChange={onChange} />
      <input type="text" name='userName' placeholder='User Name' onChange={onChange} />
      <input type="text" name='email' placeholder='E-mail' onChange={onChange} />
      <input type="password" name='password' placeholder='Password' onChange={onChange} />
      <label className={Styled.UploadFile} htmlFor="banner">Add a profil image</label>
      <input style={{ display: "none" }} type="file" name="profil" id="banner" onChange={onChange} />
      {error && <p className={Styled.Error}>{error}</p>}
      <button className={Styled.Publish}>Register</button>
    </form>
  )
}

export default Register