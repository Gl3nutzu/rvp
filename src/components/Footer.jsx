import React from 'react'
import { Link } from 'react-router-dom';

import FLogo from '../assets/logo.png'

const Footer = ({about, services, contact}) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
            <img src={FLogo} alt="logo" width={50} height={50} />
            <p>RVP Soft S.R.L.<br/>Providing reliable tech</p>
        </div> 
        <div>
            <span className="footer-title">RVP SOFT</span> 
            <button onClick={()=> scrollToSection(about.current)}>About us</button> 
            <button onClick={()=> scrollToSection(services.current)}>Services</button> 
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
            <button onClick={()=> scrollToSection(contact.current)}>Contact for an offer</button> 
            <button>Phone: +40766227333</button> 
        </div> 
        </footer>
  )
}

export default Footer