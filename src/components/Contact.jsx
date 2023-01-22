import React from 'react'

import {AiOutlinePhone, AiOutlineHome, AiOutlineMail} from "react-icons/ai"

const Contact = ({contact}) => {
  return (
    <div ref={contact} className='pb-20'>
        <div className='py-20 md:flex md:justify-center md:gap-10'>
            <div className="card w-96 bg-base-100 shadow-xl mb-10 md:mb-0">
                <div className="card-body items-center text-center py-20">
                    <h2 className="card-title mb-4"><AiOutlinePhone className='text-5xl'/></h2>
                    <p className='text-2xl'>+40 766 227 333</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mb-10 md:mb-0">
                <div className="card-body items-center text-center py-20">
                    <h2 className="card-title mb-4"><AiOutlineHome className='text-5xl'/></h2>
                    <p className='text-2xl'>Bucharest, Romania</p>
                    <p className='text-xl'>Aleea Urucu Adrian Dan, 1</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center py-20">
                    <h2 className="card-title mb-4"><AiOutlineMail className='text-5xl'/></h2>
                    <p className='text-2xl'>office@rvpsoft.com</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2xl font-semibold'>Get in touch with us!</h1>
            <div className='flex gap-4'>
                <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="E-mail" className="input input-bordered w-full max-w-xs" />
                <input type="text" placeholder="Phone" className="input input-bordered w-full max-w-xs" />
            </div>
            <textarea className="textarea textarea-bordered w-full md:w-[42.5rem]" placeholder="You message"></textarea>
            <button className="btn btn-primary">SEND</button>
        </div>
    </div>
  )
}

export default Contact