import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowMyToys from '../ShowMyToys/ShowMyToys';
import './MyToys.css'
import Swal from 'sweetalert2'


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/items?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])

    const handleDeleteToy = id => {
        const proceed = confirm('Want To Delete It');
        if (proceed) {
            fetch(`http://localhost:5000/items/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your Toy Deleted Successfully',
                            icon: 'error',
                            confirmButtonText: 'Congratulations'
                        });
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        setMytoys(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h3>the lenth of: {mytoys.length} </h3>
            <div className='mytoy_container'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                                <th>available quantity</th>
                                <th>Sub Category</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mytoys.map(mytoy => <ShowMyToys
                                    key={mytoy._id}
                                    mytoy={mytoy}
                                    handleDeleteToy={handleDeleteToy}
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