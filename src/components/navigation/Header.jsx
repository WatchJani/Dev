import Styled from "./Header.module.css"
import { FiSearch } from "react-icons/fi";

const Header = () => {
    return (
        <header>
            <div className={Styled.Container}>
                <div className={Styled.Flex}>
                    <div className={Styled.Logo}>
                        JAN
                    </div>
                    <div className={Styled.Search}>
                        <input placeholder="Search..." type="search" name="" id="" />
                        <button className={Styled.SearchButton}><FiSearch /></button>
                    </div>
                </div>
                <div className={Styled.Flex}>
                    <button className={Styled.Login}>Log in</button>
                    <button className={Styled.CreatedAcc}>Create account</button>
                </div>
            </div>
        </header>
    )
}

export default Header