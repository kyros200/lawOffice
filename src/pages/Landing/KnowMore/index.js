import './KnowMore.scss';
import Fade from 'react-reveal/Fade';
import Teste from './teste.svg'

const KnowMore = () => {

    return (
        <div className='knowMoreBackground'>
            <div className='knowMoreContent'>
                <Fade bottom>
                    <div className='title'>
                        Excelência na Região dos Lagos
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='text'>
                        Há XXX anos no mercado, temos diversos grandes clientes que comprova nossa excelência no mercado. Estamos expandindo (Essas imagens de Pokemon pensem em imagens do mesmo tamanho, um para cada cliente de vocês. Assim teria uma animação bonitinha acontecendo)
                    </div>
                </Fade>
                <div className='imageContainer'>
                    <div class="imageGroup blue">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" alt="pokemon" />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png" alt="pokemon" />
                    </div>
                    <div class="imageGroup red">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="pokemon" />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" alt="pokemon" />
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png" alt="pokemon" />
                        <img className="desktop" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png" alt="pokemon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KnowMore;