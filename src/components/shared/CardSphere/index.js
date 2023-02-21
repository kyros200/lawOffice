import Card from '../Card'
import './CardSphere.scss'

const CardSphere = ({ icon, title, text }) => {
    return (
        <Card className='cardSphereContainer'>
            <div className='icon'>
                <div className='background'>
                    <img src={icon} width={"60px"}/>
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