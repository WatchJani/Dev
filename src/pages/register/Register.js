import React, { useState } from 'react'
import axios from "../../utils/axiosBackend"

const Register = () => {

  const [data, setData] = useState({
    text: "",
    image: null
  })

  const Submit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("text", "asd")


    console.log(formData.getAll('text'))

    axios.post("user/register", formData).then((data) => {
      console.log(data)
    })
  }

  const onChange = (e) => {
    if (e.target.name === 'image')
      setData({ ...data, [e.target.name]: e.target.files[0] });
    else setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={Submit}>
      <input type="text" name='text' onChange={onChange} />
      <input type="file" name="image" id="" onChange={onChange} />
      <button>send</button>
    </form>
  )
}

export default Register