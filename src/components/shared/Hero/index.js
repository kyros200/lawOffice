import './Hero.scss';

import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const sequences = 
    [
        {
            sequence: [
                'Excelência na área Trabalhista',
                1000,
                'Excelência na área ',
                'Excelência na área Tributária',
                1000,
                'Excelência na área Comercial',
                1000,
                'Excelência na área ',
                'Excelência na área Civil',
                1000,
                'Excelência na área Penal',
                1000,
            ]
        },
        {
            sequence: [
                'Queremos seu maior conforto',
                2000,
                'Queremos seu maior prazer',
                3000,
                'Queremos sua maior tranquilidade',
                2000,
                'Queremos sua maior paz de espírito',
                3000,
            ]
        },
        {
            sequence: [
                'Rio de Janeiro',
                3000,
                'Cabo Frio',
                3000,
                'Lisboa',
                3000,
                'Onde você quiser'
            ],
            repeat: 0,
        },
    ]

    const choosenSequence = sequences[Math.floor(Math.random()*sequences.length)]

    return (
        <div className='landing-hero-container'>
            <div className='content'>
                <TypeAnimation
                wrapper="div"
                speed={50}
                className = "text"
                repeat={Infinity}
                {...choosenSequence}
                />
            </div>
        </div>
    )
}

export default Hero;