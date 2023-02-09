import React from 'react';

import One from '../utils/One.svg';

import {FaReact} from 'react-icons/fa';
import {SiMysql, SiFlutter, SiPhp, SiWordpress} from 'react-icons/si';
import {TbBrandReactNative} from 'react-icons/tb';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
        <div className='shadow-[0_0px_60px_2px_rgba(0,0,0,0.1)] rounded-xl mt-[10rem] py-6 md:w-[66%] md:mx-auto'>
            <h1 className='text-center text-2xl font-medium mb-8'>We work with</h1>
            <div className='grid grid-cols-2 items-center md:grid-cols-3 md:px-20 text-xl gap-10'>
              <div className='flex justify-center'><FaReact className='text-6xl' /></div>
              <div className='flex justify-center'><SiMysql className='text-6xl' /></div>
              <div className='flex justify-center'><SiFlutter className='text-6xl' /></div>
              <div className='flex justify-center'><TbBrandReactNative className='text-6xl' /></div>
              <div className='flex justify-center'><SiPhp className='text-6xl' /></div>
              <div className='flex justify-center'><SiWordpress className='text-6xl' /></div>
            </div>
            <h1 className='text-xl text-center mt-8'>and more...</h1>
        </div>
        <div className="hero min-h-screen text-black">
            <div className="hero-content flex-col lg:flex-row">
                <img src={One} alt="hero" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-right'>
                <h1 className="text-5xl md:text-8xl font-bold">Agile Software Development!</h1>
                <p className="py-6 opacity-75">Agile software development allows teams to deliver quickly, collaborate often, and continually improve their product. We take a slightly modified approach to the Agile methodology that maximizes those benefits while utilizing a global development model.</p>
                <Link to={'/services'}><button className="btn btn-primary text-white rounded-full w-[10rem]">Get Started</button></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default About