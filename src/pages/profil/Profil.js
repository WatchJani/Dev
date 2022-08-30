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
                    <img src={data?.profilImage} alt="slika" />
                    <button>Follow</button>
                </div>
                <div className={Styled.Border}>
                    <h1>{data?.firstName} {data?.lastName}</h1>
                    <p>{data?.info}</p>
                </div>
            </div>
        </>
    )
}

export default Profil