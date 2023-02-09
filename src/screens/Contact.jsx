import React, {useRef, useState} from 'react'
import { useNavigate } from "react-router-dom";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const navigate = useNavigate();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_gc29hpo', 'template_nawb77f', form.current, 'MSQVR40Cl9cOg3mgp');
    alert('Your request has been sent to us, we are trying to respond as soon as possible. Thank You!');
    navigate('/');
  };

  return (
    <div className='max-w-5xl pt-[8rem] mx-auto'>
        <div className='flex flex-col items-center gap-10 mb-[6rem]'>
            <h1 className='font-bold text-5xl'>Contact Us</h1>
            <p className='opacity-75 text-xl text-center'>Any questions or remarks? Just write us a message!</p>
        </div>
        <div className='card w-full bg-slate-100 flex flex-col md:flex-row gap-4 mb-[10rem]'>
            <div className='card flex justify-center md:w-[55%] bg-primary text-white m-2'>
                <div className='card-body'>
                    <h2 className='card-title'>Contact Information</h2>
                    <p className='opacity-70 text-sm'>Fill up the form and our team will get back to you within 24 hours.</p>
                    <div className='mt-4 flex gap-4 items-center'>
                        <FaPhoneAlt />
                        <p>+40 766 227 333</p>
                    </div>
                    <div className='mt-4 flex gap-4 items-center'>
                        <FaEnvelope />
                        <p>office@rvpsoft.com</p>
                    </div>
                    <div className='mt-4 flex gap-4 items-center'>
                        <FaMapMarkerAlt />
                        <p>Romania</p>
                    </div>
                </div>
                <div className='card-actions ml-10 mt-4 pb-10 flex gap-4'>
                    <div className='rounded-full hover:bg-sky-900 w-8 h-8 flex justify-center items-center'><a href="https://www.instagram.com/rvpsoft_com/" target={"_blank"} rel="noopener noreferrer"><FaFacebookF /></a></div>
                    <div className='rounded-full hover:bg-sky-900 w-8 h-8 flex justify-center items-center'><a href="https://twitter.com/rvp_soft" target={"_blank"} rel="noopener noreferrer"><FaTwitter /></a></div>
                    <div className='rounded-full hover:bg-sky-900 w-8 h-8 flex justify-center items-center'><a href="https://www.instagram.com/rvpsoft_com/" target={"_blank"} rel="noopener noreferrer"><FaInstagram /></a></div>
                    <div className='rounded-full hover:bg-sky-900 w-8 h-8 flex justify-center items-center'><FaLinkedinIn /></div>
                </div>
            </div>   
            <form className='mt-6 w-full flex justify-center' ref={form} onSubmit={sendEmail}>
                <div className='w-[80%] form-control'>
                    <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-4'>
                        <label className='hover:text-primary'>
                            <p className='opacity-60 text-sm font-medium'>First Name</p>
                            <input className='bg-slate-100 border-b-2 hover:border-primary hover:text-black focus:outline-0 w-[15rem] mt-[0.25rem] pb-1 pl-1 font-medium' name="user_name" placeholder='John' type="text" />
                        </label>
                        <label className='hover:text-primary'>
                            <p className='opacity-60 text-sm font-medium'>Last Name</p>
                            <input className='bg-slate-100 border-b-2 hover:border-primary hover:text-black focus:outline-0 w-[15rem] mt-[0.25rem] pb-1 pl-1 font-medium' placeholder='Doe' type="text" />
                        </label>
                    </div>
                    <div className='flex flex-col md:flex-row items-center md:items-start justify-between gap-4 mt-4 md:mt-8'>
                        <label className='hover:text-primary'>
                            <p className='opacity-60 text-sm font-medium'>Mail</p>
                            <input className='bg-slate-100 border-b-2 hover:border-primary hover:text-black focus:outline-0 w-[15rem] mt-[0.25rem] pb-1 pl-1 font-medium' name="user_email" placeholder='johndoe@mail.com' type="text" />
                        </label>
                        <label className='hover:text-primary'>
                            <p className='opacity-60 text-sm font-medium'>Phone</p>
                            <input className='bg-slate-100 border-b-2 hover:border-primary hover:text-black focus:outline-0 w-[15rem] mt-[0.25rem] pb-1 pl-1 font-medium' placeholder='+99 999 999 999' type="text" />
                        </label>
                    </div>
                    <label>
                        <p className='font-bold text-md mt-10 mb-2'>What product do you need?</p>
                        <div className='flex gap-6'>
                            <label className="label cursor-pointer">
                                <input type="checkbox" checked={first} onChange={() => {setFirst(!first)}} className="checkbox checkbox-primary" name='user_page' />
                                <span className="label-text ml-2 opacity-75 font-medium">Web Design</span>
                            </label>
                            <label className="label cursor-pointer">
                                <input type="checkbox" checked={second} onChange={() => {setSecond(!second)}} className="checkbox checkbox-primary" name='user_app' />
                                <span className="label-text ml-2 opacity-75 font-medium">Web & Mobile App</span>
                            </label>
                            <label className="label cursor-pointer">
                                <input type="checkbox" checked={third} onChange={() => {setThird(!third)}} className="checkbox checkbox-primary" name='user_host' />
                                <span className="label-text ml-2 opacity-75 font-medium">Hosting & Maintanance</span>
                            </label>
                        </div>
                    </label>
                    <label className='hover:text-primary mt-4'>
                        <p className='opacity-60 text-sm font-medium'>Message</p>
                        <textarea className='bg-slate-100 border-b-2 hover:border-primary hover:text-black focus:outline-0 mt-[0.25rem] pb-1 pl-1 font-medium w-full resize-none' name="message" placeholder='Write your message..' />
                    </label>
                    <button type="submit"
                    className="btn btn-active btn-lg btn-primary my-10">Send Message</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact