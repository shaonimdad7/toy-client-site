import React from 'react';
import './ShowMyToys.css'
import { FaTimes } from 'react-icons/fa';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ShowMyToys = ({ mytoy, handleDeleteToy, handleUpdated }) => {
    const { _id, img, name, subCategory, price, available, rating, sellerName } = mytoy;



    return (
        <tr>
            {/* <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th> */}
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{rating}</div>
                    </div>
                </div>
            </td>
            <td>
                {price}
                <br />
                <span className="badge badge-ghost badge-sm">{sellerName}</span>
            </td>
            <td>{available}</td>
            <th>
                <p>{subCategory}</p>
            </th>
            <th>
                <button onClick={() => handleDeleteToy(_id)} className="btn btn_show_data"> <FaTimes> </FaTimes> </button>
            </th>
            <th>
                <Link to={`/updated/${_id}`}>
                    <button onClick={() => handleUpdated(_id)} className="btn btn_show_data"> <FaRegQuestionCircle> </FaRegQuestionCircle></button>
                </Link>
            </th>
        </tr>
    );
};

export default ShowMyToys;