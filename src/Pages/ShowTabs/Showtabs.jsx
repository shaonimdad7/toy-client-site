import React from 'react';
import './Showtabs.css'

const Showtabs = ({ doctorToy }) => {
    const { img, name, price, _id, why, available } = doctorToy;
    return (
        <div className='custom_card p-4 mt-3'>
            <div className='toy_img'>
                <img src={img} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{available}</p>
            </div>
        </div>

    );
};

export default Showtabs;