import React from 'react';
import { useLoaderData } from "react-router-dom";
import './UpdatedToy.css'
import Swal from 'sweetalert2';

const UpdatedToy = () => {
    const toys = useLoaderData()
    const { _id, description, price, available, subCategory, name } = toys;

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

        fetch(`http://localhost:5000/items/${_id}`, {
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
                                            <span className="label-text custom_font">{price}</span>
                                        </label>
                                        <input type="text" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" required />
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

                                        <input type="text" defaultValue={subCategory} placeholder="barbie doll or music or doctor" name='subCategory' className="input input-bordered" />
                                    </div>
                                    <div className=''>
                                        <input type="submit" value="Add Toy" className='btn_updated' />
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