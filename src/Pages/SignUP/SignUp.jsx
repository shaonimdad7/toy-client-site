import React, { useContext, useState } from 'react';
import img from '../../assets/signimg.jpg'
import { Link } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import './SignUp.css'
import { AuthContext } from '../../Provider/AuthProvider';



const SignUp = () => {
    const [show, setShow] = useState(false);

    const { createUser } = useContext(AuthContext);

    const handleDataSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        console.log(name, password, email)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user)
            })
            .then(error => console.log(error))

    }

    return (
        <div>
            <div className="hero min-h-screen custom_class">
                <div className="hero-content flex-col-reverse lg:flex-row gap-0">
                    <div className="text-center lg:text-left login_img">
                        <img className='' src={img} alt="" />
                    </div>
                    <div className="login_img card  w-full max-w-sm ">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold mb-4">SignUp here</h1>
                            <form onSubmit={handleDataSignUp}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="name" placeholder="name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" />
                                    <p onClick={() => setShow(!show)} className='hide_password absolute'><small>
                                        {
                                            show ? <span>  <FaRegEye /></span> : <span><FaRegEyeSlash /></span>
                                        }
                                    </small></p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="text" name='photo Url' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary btn_custom" value="signup" />
                                </div>
                            </form>
                            <p className='mt-4 text-center'>Have An Account Already? <Link className='text-purple-500 font-bold' to="/login">LogIn</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;