import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import ShowMyToys from '../ShowMyToys/ShowMyToys';
import './MyToys.css';
import Swal from 'sweetalert2';

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [mytoys, setMytoys] = useState([]);

    // useEffect(() => {
    //     fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items?email=${user.email}`)
    //         .then(res => res.json())
    //         .then(data => setMytoys(data));
    // }, [user]);
    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items/email/${user?.email}`)
            .then(res => res.json())
            .then(data => setMytoys(data));
    }, [user]);



    const handleDeleteToy = id => {
        const proceed = confirm('Want To Delete It');
        if (proceed) {
            fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your Toy Deleted Successfully',
                            icon: 'error',
                            confirmButtonText: 'Done'
                        });
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        setMytoys(remaining);
                    }
                });
        }
    };


    return (
        <div>

            <h3 className="mytoys_header">All of your Toys are here, Have a look at them </h3>
            <div className="mytoy_container">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Sub Category</th>
                                <th>Delete</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mytoys.map(mytoy => (
                                <ShowMyToys
                                    key={mytoy._id}
                                    mytoy={mytoy}
                                    handleDeleteToy={handleDeleteToy}
                                // handleUpdated={handleUpdated}
                                />

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;
