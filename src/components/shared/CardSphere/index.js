import Card from '../Card'
import './CardSphere.scss'

const CardSphere = ({ icon, title, text }) => {
    return (
        <Card className='cardSphereContainer'>
            <div className='icon' aria-hidden={true}>
                <div className='background'>
                    <img src={icon} alt="ícone" width={"60px"}/>
                </div>
            </div>
            <div className='title'>
                {title}
            </div>
            <div className='text'>
                {text}
            </div>
        </Card>
    )
}

export default CardSphere;