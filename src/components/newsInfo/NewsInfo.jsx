import Styled from "./NewsInfo.module.css"

const NewsInfo = () => {
    return (
        <div className={Styled.Info}>
            <div className={Styled.PostByInfo}>
                <div className={Styled.Image}>
                    <img className={Styled.LogoBackGround} src="./images/logo2.webp" alt="" />
                    <span>The DEV Team</span>
                </div>
                <button className={Styled.Follow}>Follow</button>
                <p>The hardworking team behind dev.to ❤️</p>
                <div>
                    <p>Want to contribute to open source and help make the DEV community stronger?</p>
                    <p>The code that powers DEV is called <b>Forem</b> and is freely available on GitHub.</p>
                    <p>You're welcome to jump in!</p>
                </div>
                <button className={Styled.Contribute}>Contribute to Forem</button>
            </div>
            <div className={Styled.MorePost}>

            </div>
        </div>
    )
}

export default NewsInfo