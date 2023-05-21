import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowMyToys from '../ShowMyToys/ShowMyToys';
import './MyToys.css'

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/items?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])

    return (
        <div>
            <h3>the lenth of: {mytoys.length} </h3>
            <div className='mytoy_container'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                {/* <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th> */}
                                <th>Name</th>
                                <th>Price</th>
                                <th>available quantity</th>
                                <th>Sub Category</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mytoys.map(mytoy => <ShowMyToys
                                    key={mytoy._id}
                                    mytoy={mytoy}
                                ></ShowMyToys>)
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;