import React, { useContext } from 'react';
import img from '../../../../assets/barbie.png'
import { Link } from 'react-router-dom';
import './Navbar.css'
import { AuthContext } from '../../../../Provider/AuthProvider';



const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(result => {

            })
            .catch(error => console.error(error));
    }
    const navItems = <>
        <li className='navbar_name'><Link to="/home">Home</Link></li>
        <li className='navbar_name'><Link to="/about">About Us</Link></li>
        <li className='navbar_name'><Link to="/blog">Blog</Link></li>
        <li className='navbar_name'><Link to="/alldata">All Data</Link> </li>
        <li className='navbar_name'><Link to="/addtoy">Add Toy</Link></li>
        <li className='navbar_name'><Link to="/mytoys">My Toys</Link></li>
        <li className='navbar_name'><Link to="/login">Login</Link></li>
    </>
    return (
        <div className='bg-pink-300 pt-10 container_navbar'>
            <div className="max-w-6xl mx-auto footer navbar bg-pink-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="navbar_img relative text-xl">
                        <img src={img} alt="" />
                        <p className='absolute'>Princeess Paradise</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='info_container'>
                        {user && <div className='user_info'>
                            <div className="avatar">
                                <div className="w-28 rounded-full user_img">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
                            <h3 className=' user_name'> {user?.displayName}</h3>
                            <p className=' user_name'> {user?.email}</p>
                            <button className='btn_nav mt-2' onClick={handleLogOut}>Log Out</button>
                        </div>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;