import Link from '../shared/Link'
import './Header.scss'

import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className='header-container'>
            <div className='content'>
                <img src={logo} alt={"Vilhena Barbosa e Associados"} height="100px" />
                <div className='buttons'>
                    <Link to="/">Exemplo Link</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;