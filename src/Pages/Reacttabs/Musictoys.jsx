import React from 'react';

const Musictoys = ({ musicToy }) => {
    const { img, name, price, _id, why, available } = musicToy;
    return (
        <div className='custom_card p-4 mt-3'>
            <div className='toy_img '>
                <img src={img} alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{available}</p>
            </div>
            <div>
                <button className='btn btn_buy'>Buy Now</button>
            </div>
        </div>

    );
};

export default Musictoys;