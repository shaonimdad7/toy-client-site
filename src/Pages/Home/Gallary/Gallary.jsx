import React from 'react';
import img1 from '../../../assets/gallay1.jpg'
import img2 from '../../../assets/gallay2.jpg'
import './Gallary.css'

const Gallary = () => {
    return (
        <div>
            <h2 className='text-center gallary_header'>Here are some informations about Top-Notch barbie dolls which are here<br />and Barbies are the best toys for your girls</h2>
            <div className='gallary_container'>
                <div className='gallary_img'>
                    <img src={img1} alt="" />
                </div>
                <div className='para_container'>
                    <p> Barbie quickly became a cultural phenomenon, representing fashion, beauty, and limitless possibilities for play. With her signature blonde hair, slender figure, and an extensive wardrobe, Barbie has evolved over the years to reflect diverse backgrounds </p>
                    <p className='mt-4'>
                        What sets Barbie apart is her ability to ignite imagination and storytelling. Through Barbie, children can explore different roles and careers, imagining themselves as doctors, astronauts, teachers, or even superheroes. Barbies extensive line of accessories, vehicles, and playsets further enhances the imaginative play experience, allowing children to create their own vibrant worlds and narratives.
                    </p>
                </div>
                <div className='gallary_img'>
                    <img src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallary;