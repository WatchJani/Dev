import Styled from "./MenuContainer.module.css"

const MenuContainer = ({ children }) => {
    return (
        <div className={Styled.Container}>
            {children}
        </div>
    )
}

export default MenuContainer