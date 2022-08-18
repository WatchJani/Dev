import Styled from "./Header.module.css"
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { useState } from "react";
import PhoneMenu from "./MobileMenu"
import { useUser } from "../../contexts/UserContext";
import axios from "../../utils/axiosBackend";

const Header = () => {


    const status = useUser()

    console.log(status)

    const [isOpen, setIsOpen] = useState(false)

    const menuOpen = () => {
        setIsOpen(value => !value)
    }

    const logOut = () => {
        axios.get("/user/logout").then(() => {
            status.setNav()
            status.setData()
        })
    }

    return (
        <header>

            {isOpen && <PhoneMenu menuOpen={menuOpen} />}

            <div className={Styled.Container}>
                <div className={Styled.Flex}>
                    <button className={Styled.Menu} onClick={() => { menuOpen() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="air7jtuvzmbvxne86vvg3u7y03tyoa9" ><title id="air7jtuvzmbvxne86vvg3u7y03tyoa9">Navigation menu</title>
                            <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z"></path>
                        </svg>
                    </button>
                    <Link to="/">
                        <div className={Styled.Logo}>
                            JAN
                        </div>
                    </Link>
                    <div className={Styled.Search}>
                        <input placeholder="Search..." type="search" name="" id="" />
                        <button className={Styled.SearchButton}><FiSearch /></button>
                    </div>
                </div>


                {status.data ?
                    <div className={Styled.FlexButton}>
                        <Link to="/add">
                            <button className={Styled.Login}>Create Post</button>
                        </Link>
                        <button className={Styled.CreatedAcc} onClick={logOut}>Log out</button>
                    </div>
                    :
                    <div className={Styled.FlexButton}>
                        <Link to="login">
                            <button className={Styled.Login}>Log in</button>
                        </Link>
                        <Link to="register">
                            <button className={Styled.CreatedAcc}>Create account</button>
                        </Link>
                    </div>}
            </div>
        </header >
    )
}

export default Header