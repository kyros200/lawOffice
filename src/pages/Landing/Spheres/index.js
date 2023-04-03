import Section from '../../../components/shared/Section'
import CardSphere from '../../../components/shared/CardSphere'
import './Spheres.scss';
import Fade from 'react-reveal/Fade';

import consumidor from './icons/consumidor.svg'
import empresarial from './icons/empresarial.svg'
import imobiliario from './icons/imobiliario.svg'
import penal from './icons/penal.svg'
import previdenciario from './icons/previdenciario.svg'
import tributario from './icons/tributario.svg'
import AnaVilhena from './icons/AnaVilhena.PNG'

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";

const Spheres = () => {
    return (
        <Section
            backgroundColor='white'
        >
            <Fade bottom>
                <div className='spheresTitle'>
                    Nossas Áreas de Atuação
                </div>
            </Fade>
            <div className='spheresContainer'>
                <Fade bottom>
                    <div className='cardContainer'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='icon' aria-hidden={true}>
                                    <div className='background'>
                                        <img src={consumidor} alt="ícone" width={"60px"}/>
                                    </div>
                                </div>
                                <div className='title'>
                                    Consumidor
                                </div>
                                <div className='text'>
                                    Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área
                                </div>
                                <div className='text'>
                                    Este é um outro parágrafo onde estou botando muito texto para você ter noção de como funciona parágrafos aqui
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='secondary-slide alignedLeft'>
                                <div className='title'>
                                    Principais Atividades
                                </div>
                                <ul>
                                    <li>Consultoria Fiscal e Tributária</li>
                                    <li>Abertura de CNPJ</li>
                                    <li>Assessoria Fiscal</li>
                                    <li>...</li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='image' aria-hidden={true}>
                                    <img src={AnaVilhena} alt="ícone" width={"120px"}/>
                                </div>
                                <div className='title'>
                                    Ana Luiza Vilhena
                                </div>
                                <div className='text'>
                                    Há XX anos no mercado fazendo XXX YYY ZZZ.
                                </div>
                                <div className='text'>
                                    Isso é um outro parágrafo
                                </div>
                                <div className='button' onClick={() => window.open('https://wa.me/5521988922932?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços')}>
                                    Falar com ela
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='cardContainer'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='icon' aria-hidden={true}>
                                    <div className='background'>
                                        <img src={empresarial} alt="ícone" width={"60px"}/>
                                    </div>
                                </div>
                                <div className='title'>
                                    Empresarial
                                </div>
                                <div className='text'>
                                    Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área
                                </div>
                                <div className='text'>
                                    Este é um outro parágrafo onde estou botando muito texto para você ter noção de como funciona parágrafos aqui
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='secondary-slide alignedLeft'>
                                <div className='title'>
                                    Principais Atividades
                                </div>
                                <ul>
                                    <li>Consultoria Fiscal e Tributária</li>
                                    <li>Abertura de CNPJ</li>
                                    <li>Assessoria Fiscal</li>
                                    <li>...</li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='image' aria-hidden={true}>
                                    <img src={AnaVilhena} alt="ícone" width={"120px"}/>
                                </div>
                                <div className='title'>
                                    Ana Luiza Vilhena
                                </div>
                                <div className='text'>
                                    Há XX anos no mercado fazendo XXX YYY ZZZ.
                                </div>
                                <div className='text'>
                                    Isso é um outro parágrafo
                                </div>
                                <div className='button' onClick={() => window.open('https://wa.me/5521988922932?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços')}>
                                    Falar com ela
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='cardContainer'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='icon' aria-hidden={true}>
                                    <div className='background'>
                                        <img src={imobiliario} alt="ícone" width={"60px"}/>
                                    </div>
                                </div>
                                <div className='title'>
                                    Imobiliário
                                </div>
                                <div className='text'>
                                    Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área
                                </div>
                                <div className='text'>
                                    Este é um outro parágrafo onde estou botando muito texto para você ter noção de como funciona parágrafos aqui
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='secondary-slide alignedLeft'>
                                <div className='title'>
                                    Principais Atividades
                                </div>
                                <ul>
                                    <li>Consultoria Fiscal e Tributária</li>
                                    <li>Abertura de CNPJ</li>
                                    <li>Assessoria Fiscal</li>
                                    <li>...</li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='image' aria-hidden={true}>
                                    <img src={AnaVilhena} alt="ícone" width={"120px"}/>
                                </div>
                                <div className='title'>
                                    Ana Luiza Vilhena
                                </div>
                                <div className='text'>
                                    Há XX anos no mercado fazendo XXX YYY ZZZ.
                                </div>
                                <div className='text'>
                                    Isso é um outro parágrafo
                                </div>
                                <div className='button' onClick={() => window.open('https://wa.me/5521988922932?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços')}>
                                    Falar com ela
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='cardContainer'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='icon' aria-hidden={true}>
                                    <div className='background'>
                                        <img src={penal} alt="ícone" width={"60px"}/>
                                    </div>
                                </div>
                                <div className='title'>
                                    Penal
                                </div>
                                <div className='text'>
                                    Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área
                                </div>
                                <div className='text'>
                                    Este é um outro parágrafo onde estou botando muito texto para você ter noção de como funciona parágrafos aqui
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='secondary-slide alignedLeft'>
                                <div className='title'>
                                    Principais Atividades
                                </div>
                                <ul>
                                    <li>Consultoria Fiscal e Tributária</li>
                                    <li>Abertura de CNPJ</li>
                                    <li>Assessoria Fiscal</li>
                                    <li>...</li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='image' aria-hidden={true}>
                                    <img src={AnaVilhena} alt="ícone" width={"120px"}/>
                                </div>
                                <div className='title'>
                                    Ana Luiza Vilhena
                                </div>
                                <div className='text'>
                                    Há XX anos no mercado fazendo XXX YYY ZZZ.
                                </div>
                                <div className='text'>
                                    Isso é um outro parágrafo
                                </div>
                                <div className='button' onClick={() => window.open('https://wa.me/5521988922932?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços')}>
                                    Falar com ela
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='cardContainer'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='icon' aria-hidden={true}>
                                    <div className='background'>
                                        <img src={previdenciario} alt="ícone" width={"60px"}/>
                                    </div>
                                </div>
                                <div className='title'>
                                    Previdenciario
                                </div>
                                <div className='text'>
                                    Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área
                                </div>
                                <div className='text'>
                                    Este é um outro parágrafo onde estou botando muito texto para você ter noção de como funciona parágrafos aqui
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='secondary-slide alignedLeft'>
                                <div className='title'>
                                    Principais Atividades
                                </div>
                                <ul>
                                    <li>Consultoria Fiscal e Tributária</li>
                                    <li>Abertura de CNPJ</li>
                                    <li>Assessoria Fiscal</li>
                                    <li>...</li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='image' aria-hidden={true}>
                                    <img src={AnaVilhena} alt="ícone" width={"120px"}/>
                                </div>
                                <div className='title'>
                                    Ana Luiza Vilhena
                                </div>
                                <div className='text'>
                                    Há XX anos no mercado fazendo XXX YYY ZZZ.
                                </div>
                                <div className='text'>
                                    Isso é um outro parágrafo
                                </div>
                                <div className='button' onClick={() => window.open('https://wa.me/5521988922932?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços')}>
                                    Falar com ela
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className='cardContainer'>
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className='icon' aria-hidden={true}>
                                    <div className='background'>
                                        <img src={tributario} alt="ícone" width={"60px"}/>
                                    </div>
                                </div>
                                <div className='title'>
                                    Tributário
                                </div>
                                <div className='text'>
                                    Isso é uma descrição bem descritiva para que tenha um longo texto brevemente exsplicando o que é essa área
                                </div>
                                <div className='text'>
                                    Este é um outro parágrafo onde estou botando muito texto para você ter noção de como funciona parágrafos aqui
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='secondary-slide alignedLeft'>
                                <div className='title'>
                                    Principais Atividades
                                </div>
                                <ul>
                                    <li>Consultoria Fiscal e Tributária</li>
                                    <li>Abertura de CNPJ</li>
                                    <li>Assessoria Fiscal</li>
                                    <li>...</li>
                                </ul>
                            </SwiperSlide>
                            <SwiperSlide className=''>
                                <div className='image' aria-hidden={true}>
                                    <img src={AnaVilhena} alt="ícone" width={"120px"}/>
                                </div>
                                <div className='title'>
                                    Ana Luiza Vilhena
                                </div>
                                <div className='text'>
                                    Há XX anos no mercado fazendo XXX YYY ZZZ.
                                </div>
                                <div className='text'>
                                    Isso é um outro parágrafo
                                </div>
                                <div className='button' onClick={() => window.open('https://wa.me/5521988922932?text=Gostaria%20de%20saber%20mais%20sobre%20seus%20serviços')}>
                                    Falar com ela
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>
            </div>
        </Section>
    )
}

export default Spheres;