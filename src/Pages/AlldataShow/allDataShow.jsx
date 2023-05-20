import React from 'react';
import './AllDataShow.css'
import { Link } from 'react-router-dom';

const Alldatashow = ({ alldata }) => {
    const { img, name, price, rating, _id, why, available } = alldata;
    return (
        <div className="card w-96 bg-base-100 shadow-xl custom_css_container">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price: {price}</p>
                <p>{rating}</p>
                <p>{available}</p>
                <div className="card-actions">
                    <Link to={`/viewdetails/${_id}`}>
                        <button className="btn btn-primary btn_custom_data">View Detials</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Alldatashow;