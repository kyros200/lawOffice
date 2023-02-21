import './Footer.scss'

import logo from "../../images/logo.png"

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='content'>
                <div className='left'>
                    <img src={logo} />
                </div>
                <div className='right'>
                    <div className='title'>
                        <p className='line'/>
                        <div className='content'>
                            Brasil
                        </div>
                    </div>
                    <div className='text'>
                        Rua do Carmo nº 6, grupo 1207 a 1212 <br/>
                        20.011-020-Centro - Rio de Janeiro - RJ <br/>
                        + 55 21 25337170 + 55 21 25330322 <br/> <br/>
                        Rua Coronel Ferreira nº 281, loja 1 <br/>
                        28.915-370-Portinho - Cabo Frio - RJ <br/>
                        + 55 22 30318198 + 55 21 999727170 <br/>
                    </div>
                    <div className='title'>
                        <p className='line'/>
                        <div className='content'>
                            Portugal
                        </div>
                    </div>
                    <div className='text'>
                        Avenida Duque de Loulé 110 <br/>
                        Lisboa - Lisboa <br/>
                        1050-045 <br/>
                        + 351 927933638 <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;