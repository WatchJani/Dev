import React, { useState } from 'react'
import axios from "../../utils/axiosBackend"
import { useNavigate } from 'react-router-dom'
import Spinner from '../../components/Spiner/Spiner'

const Register = () => {
  let navigate = useNavigate();

  const [loading, setLoading] = useState();

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
        console.log(err);
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
    <form onSubmit={Submit}>
      <input type="text" name='firstName' onChange={onChange} />
      <input type="text" name='lastName' onChange={onChange} />
      <input type="text" name='userName' onChange={onChange} />
      <input type="text" name='email' onChange={onChange} />
      <input type="text" name='password' onChange={onChange} />
      <input type="file" name="profil" id="" onChange={onChange} />
      <button>send</button>
    </form>
  )
}

export default Register