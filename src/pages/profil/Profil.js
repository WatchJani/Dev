import { useParams } from 'react-router-dom'
import Styled from './Profil.module.css'
import axios from '../../utils/axiosBackend'
import { useEffect, useState } from 'react'

const Profil = () => {

    const { profil } = useParams()

    const [data, setData] = useState()

    useEffect(() => {
        axios.get(`/user/${profil}`).then((data) => {
            setData(data.data)
        })
    }, [])

    console.log(data)

    return (
        <>
            <div className={Styled.Background} />
            <div className={Styled.ProfilIngfo}>
                <div className={Styled.Header}>
                    <img src="https://i00.eu/img/605/1024x1024/axqseo95/235437.jpg" alt="slika" />
                    <button>Follow</button>
                </div>
                <div className={Styled.Border}>
                    <h1>Ben Halpern</h1>
                    <p>A Canadian software developer who thinks he’s funny. He/Him.</p>
                </div>
            </div>
        </>
    )
}

export default Profil