// import { useState } from 'react';
// import ReactLoading from 'react-loading';
import Hero from './Hero'
import KnowMore from './KnowMore'
import Spheres from './Spheres'
// import Modal from '../Modal';
import './MainPage.scss';

const MainPage = () => {

    // const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='landing-container'>
            <Hero />
            <KnowMore />
            <Spheres />
        </div>
    )
}

export default MainPage;