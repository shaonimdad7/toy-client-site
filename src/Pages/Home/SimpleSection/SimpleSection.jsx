import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import img1 from '../../../assets/you.png'
import img2 from '../../../assets/slide_img3.png'
import img3 from '../../../assets/slide_img2.png'
import './SimpleSection.css'
import { Link } from 'react-router-dom';

const SimpleSection = () => {
    return (
        <div>
            <h1 className='simple_header text-center'>Here are some of our Customers About Our Platform</h1>
            <div className='flex simple_container'>
                <div className='left_side'>
                    <p className=''>
                        OUR CUSTOMERS LOVE OUR PRODUCT
                    </p>
                    <h2 className='customer_feed'>
                        Customer FeedBack
                    </h2>
                    <p>
                        Dont just take our word for it, read from our extensive <br />
                        list of Toys and customer testimonials.
                    </p>

                    <Link to="/alldata">
                        <button className='btn btn_add  mt-5'>See Our Doll</button>
                    </Link>
                </div>
                <div className='right_side space-y-5'>
                    <div className='right_side_single'>
                        <p className='heart'><FaQuoteLeft /></p>
                        <div className='customer_opinion'>
                            <p>Awesome theme, and very professional customer support! Im a very happy customer, thanks.</p>
                            <h3>- Jonathan row</h3>
                        </div>
                        <div className='customer_photo'>
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <div className='right_side_single'>
                        <p className='heart'> <FaQuoteLeft /></p>
                        <div className='customer_opinion'>
                            <p>Really nice, clean and good looking Template. Easy to set up if you read the documentation</p>
                            <h3>- Marry charles</h3>
                        </div>
                        <div className='customer_photo'>
                            <img src={img2} alt="" />
                        </div>
                    </div>
                    <div className='right_side_single'>
                        <p className='heart'> <FaQuoteLeft /></p>
                        <div className='customer_opinion'>
                            <p>Really nice, clean and good looking Template. Easy to set up if you read the documentation</p>
                            <h3>- Katy Perry</h3>
                        </div>
                        <div className='customer_photo'>
                            <img src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleSection;