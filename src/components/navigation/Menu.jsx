import { Link } from 'react-router-dom'
import { SVG_Data } from './svg'


const Menu = () => {
    return (
        <menu>
            {
                SVG_Data.map(({ link, name, svg }, index) => {
                    return (
                        <Link to={link} key={index}>
                            <div className="menu">
                                {svg}
                                <p>{name}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </menu>
    )
}

export default Menu