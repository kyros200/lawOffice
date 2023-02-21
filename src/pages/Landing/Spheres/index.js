import Section from '../../../components/shared/Section'
import CardSphere from '../../../components/shared/CardSphere'
import './Spheres.scss';

import consumidor from './icons/consumidor.svg'
import empresarial from './icons/empresarial.svg'
import imobiliario from './icons/imobiliario.svg'
import penal from './icons/penal.svg'
import previdenciario from './icons/previdenciario.svg'
import tributario from './icons/tributario.svg'

const Spheres = () => {
    return (
        <Section
            backgroundColor='white'
        >
            <div className='spheresTitle'>
                Nossas Áreas de Atuação
            </div>
            <div className='spheresContainer'>
                <CardSphere
                    icon={consumidor}
                    title={"Consumidor"}
                    text={"Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área"}
                />
                <CardSphere
                    icon={empresarial}
                    title={"Empresarial"}
                    text={"Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área"}
                />
                <CardSphere
                    icon={imobiliario}
                    title={"Imobiliário"}
                    text={"Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área"}
                />
                <CardSphere
                    icon={penal}
                    title={"Penal"}
                    text={"Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área"}
                />
                <CardSphere
                    icon={previdenciario}
                    title={"Previdenciário"}
                    text={"Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área"}
                />
                <CardSphere
                    icon={tributario}
                    title={"Tributário"}
                    text={"Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área"}
                />
            </div>
        </Section>
    )
}

export default Spheres;