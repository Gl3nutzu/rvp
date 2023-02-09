import React from 'react';

import { IoDesktop, IoPhonePortrait } from 'react-icons/io5';
import { AiFillDatabase } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
    <>
        <div className='flex justify-center my-10 md:my-[8rem]'>
            <h1 className='text-4xl text-center font-bold text-black border-t-2 border-b-2 pt-1 pb-2'>Services</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-between md:justify-center md:mx-[10%] text-black mb-10 md:mb-0'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-14 h-14 rounded-full bg-base-200'>
                    <IoDesktop className='w-8 h-8' />
                </div>
                <h1 className='font-bold text-lg'>Web Design</h1>
                <p className='opacity-70 text-center text-black w-64'>You have a smart business but your website doesn't look smart enough? Crafting websites that convert and grow your business</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-14 h-14 rounded-full bg-base-200'>
                    <IoPhonePortrait className='w-8 h-8' />
                </div>
                <h1 className='font-bold text-lg'>Web & Mobile Apps</h1>
                <p className='opacity-70 text-center text-black w-64'>Design and develop such a application for you based on your business processes and requirements</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-14 h-14 rounded-full bg-base-200'>
                    <AiFillDatabase className='w-8 h-8' />
                </div>
                <h1 className='font-bold text-lg'>Maintenance & Host</h1>
                <p className='opacity-70 text-center text-black w-64'>Our team of web developers has the technical expertise you need for server maintenance and a good hosting choice</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <Link to={'/services'}><button className="btn btn-black text-white w-[10rem] mx-auto mt-8">Learn more</button></Link>
        </div>
    </>
  )
}

export default Services