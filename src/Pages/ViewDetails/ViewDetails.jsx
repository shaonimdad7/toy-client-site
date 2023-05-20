import React from "react";
import { useLoaderData } from "react-router-dom";
import './ViewDetails.css'

const ViewDetails = () => {

    const itmes = useLoaderData();
    const { img, name, price, rating, available, sellerName, sellerEmail, why, description } = itmes;

    return (
        <div>
            <h1 className="text-center custom_header">Here Are Details Of <span className="text-pink-600">{name}</span></h1>
            <div className="flex container_css">
                <div className="img_container">
                    <img src={img} alt="" />
                </div>
                <div className="details_container ">
                    <h3 className="text-4xl">{name}</h3>
                    <div className="deials">
                        <p className="text-pink-500">Price:<span className="text-black"> {price}</span></p>
                        <p className="text-pink-500">Availability: <span className="text-black">{available}</span></p>
                        <p className="text-pink-500">Rating: <span className="text-black">{rating}</span></p>
                        <p className="text-pink-500">Why This Product: <span className="text-black">{why}</span></p>
                    </div>
                    <div className="deials">
                        <p className="text-pink-500">Details Of The Product: <span className="text-black">{description}</span></p>
                    </div>
                    <div className="mt-3 details">
                        <p className="text-pink-500">Seller Name: <span className="text-black">{sellerName}</span></p>
                        <p className="text-pink-500">Seler Email: <span className="text-black">{sellerEmail}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;