import React, { useContext, useState } from 'react';
import './Login.css'
import img from '../../assets/signimg.jpg'
import { Link } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { signInWithPopup } from 'firebase/auth';


const Login = () => {
    const [show, setShow] = useState(false);
    const [newuser, setNewUser] = useState(null)

    const { signIn, signInWithGoogle } = useContext(AuthContext);


    const handleDataLogin = event => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(password, email)
        signIn(email, password)
            .then(resutl => {
                const user = resutl.user;
                form.reset();
                console.log(user);
            })
            .catch(error => console.log(error));

    }

    const handleWithGoogleSignIn = () => {
        console.log('google mama')
        signInWithGoogle()
            .then(result => {
                const newuser = result.user;
                console.log(newuser);
                setNewUser(newuser);
                // navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
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
                            <h1 className="text-5xl font-bold mb-4">Login here</h1>
                            <form onSubmit={handleDataLogin}>
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
                                    <p onClick={() => setShow(!show)} className='hide_password_login absolute'><small>
                                        {
                                            show ? <span>  <FaRegEye /></span> : <span><FaRegEyeSlash /></span>
                                        }
                                    </small></p>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" className="btn btn-primary btn_custom" value="Log in" />
                                </div>
                            </form>
                            <p className='mt-4 text-center'>Are you new Here? <Link className='text-black font-bold' to="/signup">Sing Up</Link> </p>
                            <button onClick={handleWithGoogleSignIn} className='btn btn_custom'> Sign Up With <span className='ml-3'><FaGoogle /> </span></button>
                            {newuser && <div>
                                <h3>user: {newuser?.displayName}</h3>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;