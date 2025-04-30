import React from 'react';
import { NavLink } from 'react-router';
import { CiUser } from "react-icons/ci";


const Navbar = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className="navbar p-0">
                <div className="navbar-start">
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/career">Career</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <span></span><a className="btn px-5"> <CiUser />Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;