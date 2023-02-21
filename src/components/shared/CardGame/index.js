import Card from '../Card'
import './CardGame.scss'

const CardGame = ({name, console, image, ...rest}) => {
    return (
    <Card {...rest} className='card-game'>
        <div className='image'>
            <img src={image} alt={name}/>
        </div>
        <div className='text'>
            {name}
        </div>
    </Card>
    )
}

export default CardGame;