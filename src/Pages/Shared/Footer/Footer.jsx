import React from 'react';
import img from '../../../assets/barbie.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className=' bg-pink-200'>
            <footer className="max-w-6xl mx-auto footer p-10 text-base-content">
                <div>
                    <div className='footer_img'>
                        <img src={img} alt="" />
                    </div>
                    <p className='font-bold'>Princess Paradise<br />Providing reliable Toys since 1992</p>
                </div>
                <div>
                    <span className="footer-title text-2xl">Category</span>
                    <a className="link link-hover">Barbie Dolls</a>
                    <a className="link link-hover">Activity cubes</a>
                    <a className="link link-hover">Shape sorters</a>
                    <a className="link link-hover">Activity gyms</a>
                </div>
                <div>
                    <span className="footer-title text-2xl">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title text-2xl">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;