import React from 'react'
import { Link } from 'react-router-dom';
import {FaTwitter, FaInstagram} from "react-icons/fa"

import FLogo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="footer p-10 bg-white text-base-content shadow-[0_-10px_40px_2px_rgba(0,0,0,0.1)]">
        <div>
            <img src={FLogo} alt="logo" width={50} height={50} />
            <p>RVP Soft S.R.L.<br/>Providing reliable tech</p>
        </div> 
        <div>
            <span className="footer-title">RVP SOFT</span> 
            <div className='flex gap-4'>
                <a href="https://twitter.com/rvp_soft" target={"_blank"} rel="noopener noreferrer"><FaTwitter className='w-8 h-8' /></a>
                <a href="https://www.instagram.com/rvpsoft_com/" target={"_blank"} rel="noopener noreferrer"><FaInstagram className='w-8 h-8' /></a>
            </div>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <Link to={'/terms'}>Terms of use</Link>
            <Link to={'/privacy'}>Privacy policy</Link>
            <Link to={'/cookie'}>Cookie policy</Link>
        </div>
        <div>
            <span className="footer-title">Contact</span> 
            <button><a href='mailto:office@rvpsoft.com'>Send us an mail</a></button> 
            <Link to={'/'}>Contact for an offer</Link> 
            <button>Phone: +40766227333</button> 
        </div> 
        </footer>
  )
}

export default Footer