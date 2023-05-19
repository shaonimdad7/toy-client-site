import React from 'react';
import './Login.css'
import img from '../../assets/signimg.jpg'

const Login = () => {

    const handleDataLogin = event => {
        event.preventDefault();

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
                            <form onSubmit={handleDataLogin}>
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
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary btn_custom" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;