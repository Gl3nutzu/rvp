import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/rvp.png';

const Navbar = () => {

  return (
    <div className="navbar bg-base-100 fixed z-10 shadow-lg px-4 md:px-10">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Homepage</Link></li>
                    <li><Link to={'/services'}>Services</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <Link to={'/'}><img src={Logo} alt='LOGO' width={170} height={33}></img></Link>
        </div>
        <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0 ">
            <li className='font-medium'><Link to={'/'}>Homepage</Link></li>
            <li className='font-medium'><Link to={'/services'}>Services</Link></li>
            <li className='font-medium'><Link to={'/contact'}>Contact</Link></li>
        </ul>
        </div>
        <div className="navbar-end">
            <Link to={'/contact'}><button className="btn btn-primary text-white rounded-full w-[10rem]">
                Hire us!
            </button></Link>
        </div>
    </div>
  )
}

export default Navbar