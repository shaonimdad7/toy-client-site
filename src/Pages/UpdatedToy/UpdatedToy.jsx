import React, { useState } from 'react';
import { useLoaderData } from "react-router-dom";
import './UpdatedToy.css'
import Swal from 'sweetalert2';

const UpdatedToy = () => {
    const toys = useLoaderData()
    const { _id, description, price, available, subCategory, name } = toys;
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleUpdatedToy = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const price = form.price.value;
        const description = form.description.value;
        const available = form.available.value;
        const subCategory = form.subCategory.value;
        const UpdatedItems = { name, price, description, available, subCategory };
        console.log(UpdatedItems)

        fetch(`https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedItems)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your Toy Updated Successfully',
                        icon: 'Updated',
                        confirmButtonText: 'Congratulations'
                    })
                }
            })
    }



    return (
        <div>
            <div>
                <h1 className='text-center additem_header'>Update your Product From here Easily</h1>
                <div>
                    <form onSubmit={handleUpdatedToy}>
                        <div className='add_container'>
                            <div className=' flex form_container'>
                                <div className="card-body body_part space-y-2">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text custom_font">Name</span>
                                        </label>
                                        <input type="text" placeholder="name" defaultValue={name} name='name' className="input input-bordered" required />
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text custom_font">Available Quantity</span>
                                        </label>
                                        <input type="text" placeholder="Quantity" defaultValue={available} name='available' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text custom_font">Price</span>
                                        </label>
                                        <input type="text" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="card-body body_part space-y-2 mobile_css">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text custom_font">Description</span>
                                        </label>
                                        <input type="text" defaultValue={description} placeholder="Description" name='description' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text custom_font">Sub Category</span>
                                        </label>
                                        <select value={selectedOption} onChange={handleChange} name="subCategory" className="input input-bordered">
                                            <option value="">Select a sub category</option>
                                            <option value="barbie doll">Barbie Doll</option>
                                            <option value="music">Music</option>
                                            <option value="doctor">Doctor</option>
                                        </select>
                                        {selectedOption && (
                                            <p className='mt-2'>You have selected: <span className='text-pink-600'>{selectedOption}</span></p>
                                        )}
                                    </div>
                                    <div className=''>
                                        <input type="submit" value="Updated Toy" className='btn_updated' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdatedToy;