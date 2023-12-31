import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './AddItem.css'
import Swal from 'sweetalert2'


const AddItem = () => {
    const { user } = useContext(AuthContext)
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const img = form.img.value;
        const sellerName = form.sellerName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const product = form.product.value;
        const available = form.available.value;
        const subCategory = form.subCategory.value;
        const newToyItem = { name, img, sellerName, email, price, rating, description, product, available, subCategory };
        console.log(newToyItem)

        fetch('https://b7a11-toy-marketplace-server-side-shaonimdad7.vercel.app/items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newToyItem)
        })
            .then(res => res.json())
            .then(data => {
                form.reset();
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Congratulations'
                    })
                }
            })
    }

    return (
        <div>
            <h1 className='text-center additem_header'>Here You can add your product to our side</h1>
            <div>
                <form onSubmit={handleAddToy}>
                    <div className='add_container'>
                        <div className=' flex form_container'>
                            <div className="card-body body_part space-y-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name='name' className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Photo Url</span>
                                    </label>
                                    <input type="text" placeholder="Url" name='img' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Seller Name</span>
                                    </label>
                                    <input type="text" defaultValue={user?.displayName} placeholder="Seller Name" name='sellerName' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Seller Email</span>
                                    </label>
                                    <input type="email" defaultValue={user?.email} placeholder="Seller Email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Available Quantity</span>
                                    </label>
                                    <input type="text" placeholder="Quantity" name='available' className="input input-bordered" />
                                </div>
                            </div>
                            <div className="card-body body_part space-y-2 mobile_css">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Price</span>
                                    </label>
                                    <input type="text" placeholder="Price" name='price' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Rating</span>
                                    </label>
                                    <input type="text" placeholder="Rating" name='rating' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" name='description' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text custom_font">Say Something About the Product</span>
                                    </label>
                                    <input type="text" placeholder="product" name='product' className="input input-bordered" />
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

                            </div>
                        </div>
                        <div className='custom_btn'>
                            <input type="submit" value="Add Toy" className='btn btn_alltoy' />
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default AddItem;