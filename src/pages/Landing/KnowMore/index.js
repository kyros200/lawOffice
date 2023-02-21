import Section from '../../../components/shared/Section'
import Link from '../../../components/shared/Link'
import './KnowMore.scss';

const KnowMore = () => {

    return (
        <div className='knowMoreBackground'>
            <Section
                className={`knowMoreBackdrop`}
            >
                <div className='knowMoreContent'>
                    <div className='title'>
                        Qualidade e Segurança
                    </div>
                    <div className='text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                    </div>
                    <div className='buttonContainer'>
                        <Link className='button' to="/">
                            Fale Conosco
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    )
}

export default KnowMore;