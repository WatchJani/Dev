import React, { useContext, useEffect, useState } from "react"
import axios from "../utils/axiosBackend"
import authHeader from "../utils/auth-header"



const Context = React.createContext()

export const useUser = () => {
    return useContext(Context)
}

const UserProvider = ({ children }) => {
    const [verified, setVerified] = useState(false);
    const [data, setData] = useState()
    const [nav, setNav] = useState(null)


    useEffect(() => {
        axios
            .get('/user/protected', { headers: authHeader() })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                return setVerified(true);
            });
    }, [nav]);


    return (
        <Context.Provider value={{ data, setNav, setData }}>{verified && children}</Context.Provider>
    )
}

export default UserProvider