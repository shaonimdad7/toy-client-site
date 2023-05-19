import React from 'react';
import './AllDataShow.css'

const Alldatashow = ({ alldata }) => {
    const { img, name, price, rating } = alldata;
    return (
        <div className="card w-96 bg-base-100 shadow-xl custom_css_container">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions">
                    <button className="btn btn-primary btn_custom">View Detials</button>
                </div>
            </div>
        </div>
    );
};

export default Alldatashow;