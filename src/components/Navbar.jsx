import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/rvp.png';

const Navbar = ({about, services, contact}) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div className="navbar bg-base-100 fixed z-10 shadow-lg">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>Homepage</Link></li>
                    <li><button onClick={()=> {if(about != null) scrollToSection(about.current)}}>About</button></li>
                    <li><button onClick={()=> {if(services != null) scrollToSection(services.current)}}>Services</button></li>
                    <li><button onClick={()=> {if(contact != null) scrollToSection(contact.current)}}>Contact</button></li>
                </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl" href='/'><img src={Logo} alt='LOGO' width={170} height={33}></img></a>
        </div>
        <div className="navbar-center hidden md:flex">
        <ul tabIndex={0} className="menu menu-horizontal p-0 ">
            <li><Link to={'/'}>Homepage</Link></li>
            <li><button onClick={()=> {if(about != null) scrollToSection(about.current)}}>About</button></li>
            <li><button onClick={()=> {if(services != null) scrollToSection(services.current)}}>Services</button></li>
            <li><button onClick={()=> {if(contact != null) scrollToSection(contact.current)}}>Contact</button></li>
        </ul>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
            </button>
        </div>
    </div>
  )
}

export default Navbar