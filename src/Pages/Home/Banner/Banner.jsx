import React from 'react';
import img1 from '../../../assets/banner1.jpg'
import img2 from '../../../assets/banner2.jpg'
import img3 from '../../../assets/banner3.jpg'
import img4 from '../../../assets/banner4.jpg'
import './Banner.css'
import Marquee from "react-fast-marquee";


const Banner = () => {
    return (
        <div className="carousel w-full max-w-6xl mx-auto mt-2">
            <div id="slide1" className="carousel-item relative w-full custom_css ">
                <img src={img1} className="w-full" />
                <div className="absolute items-center h-full w-full
                 bg-gradient-to-r linar_custom">
                    <div className='text-center custom_para'>
                        <h1 className='text-2xl '>There you will find the best product for your girls, We are here to ensure 100% satisfaction <br /> for you and your girls. we have been providing the service for last 7 years</h1>
                        <div className='marquee_container'>
                            <Marquee>
                                I can be a React component, multiple React components, or just some text.
                            </Marquee>
                        </div>
                        <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat ipsam minima <br /> obcaecati recusandae. Corrupti, amet quam? Eos magnam non commodi <br /> voluptas aspernatur voluptate debitis delectus ipsum esse, vel minus.</p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide4" className="btn btn_carousol">PREV</a>
                    <a href="#slide2" className="btn btn_carousol">NEXT</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full custom_css">
                <img src={img4} className="w-full" />
                <div className="absolute items-center h-full w-full
                 bg-gradient-to-r linar_custom">
                    <div className='text-center custom_para'>
                        <h1 className='text-2xl '>There you will find the best product for your girls, We are here to ensure 100% satisfaction <br /> for you and your girls. we have been providing the service for last 7 years</h1>
                        <div className='marquee_container'>
                            <Marquee>
                                I can be a React component, multiple React components, or just some text.
                            </Marquee>
                        </div>
                        <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat ipsam minima <br /> obcaecati recusandae. Corrupti, amet quam? Eos magnam non commodi <br /> voluptas aspernatur voluptate debitis delectus ipsum esse, vel minus.</p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide1" className="btn btn_carousol">PREV</a>
                    <a href="#slide3" className="btn btn_carousol">NEXT</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full custom_css">
                <img src={img3} className="w-full" />
                <div className="absolute items-center h-full w-full
                 bg-gradient-to-r linar_custom">
                    <div className='text-center custom_para'>
                        <h1 className='text-2xl '>There you will find the best product for your girls, We are here to ensure 100% satisfaction <br /> for you and your girls. we have been providing the service for last 7 years</h1>
                        <div className='marquee_container'>
                            <Marquee>
                                I can be a React component, multiple React components, or just some text.
                            </Marquee>
                        </div>
                        <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat ipsam minima <br /> obcaecati recusandae. Corrupti, amet quam? Eos magnam non commodi <br /> voluptas aspernatur voluptate debitis delectus ipsum esse, vel minus.</p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide2" className="btn btn_carousol">PREV</a>
                    <a href="#slide4" className="btn btn_carousol">NEXT</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full custom_css">
                <img src={img2} className="w-full" />
                <div className="absolute items-center h-full w-full
                 bg-gradient-to-r linar_custom">
                    <div className='text-center custom_para'>
                        <h1 className='text-2xl '>There you will find the best product for your girls, We are here to ensure 100% satisfaction <br /> for you and your girls. we have been providing the service for last 7 years</h1>
                        <div className='marquee_container'>
                            <Marquee>
                                I can be a React component, multiple React components, or just some text.
                            </Marquee>
                        </div>
                        <p className='mt-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci placeat ipsam minima <br /> obcaecati recusandae. Corrupti, amet quam? Eos magnam non commodi <br /> voluptas aspernatur voluptate debitis delectus ipsum esse, vel minus.</p>
                    </div>
                </div>
                <div className="absolute flex justify-end gap-3 transform -translate-y-1/2 left-5 right-5  bottom-0">
                    <a href="#slide3" className="btn btn_carousol">PREV</a>
                    <a href="#slide1" className="btn btn_carousol">NEXT</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;