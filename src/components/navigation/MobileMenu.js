import Styled from "./Header.module.css"
import Menu from "./Menu"

const PhoneMenu = ({ menuOpen }) => {

    return (
        <div className={Styled.FullScreenMenu}>
            <div className={Styled.MenuItems}>
                <div className={Styled.TitleMenu}>
                    <h2>DEV Community</h2>
                    <button className={Styled.Menu} onClick={() => { menuOpen() }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" role="img" aria-labelledby="a3ibipw3sxyh3g0x41bze60g2kwcmxjq" aria-hidden="true"><title id="a3ibipw3sxyh3g0x41bze60g2kwcmxjq">Close</title><path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636l4.95 4.95z"></path></svg>
                    </button>
                </div>
                <div className={Styled.MenuWrapper} onClick={() => { menuOpen() }}>
                    <Menu />
                </div>
            </div>
            <div className={Styled.Ostatak} onClick={() => { menuOpen() }}>

            </div>
        </div>
    )
}

export default PhoneMenu