import Styled from "./newsContainer.module.css"

export const NewsContainer = ({ children }) => {
    return (
        <div className={Styled.Container}>
            {children}
        </div>
    )
}