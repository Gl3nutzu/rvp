import React from 'react'

import First from '../assets/1.png'
import Second from '../assets/2.png'
import Third from '../assets/3.png'


const Services = ({services, contact}) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
      }
    return (
    {/* <div ref={services} className='py-20'>
        <div className='flex flex-col items-center'>
            <h1 className='text-5xl text-center font-semibold '>Services</h1>
            <div className='w-24 h-2 bg-blue-400 rounded-sm mt-4'></div>
        </div>
    <div className='md:flex md:flex-row md:gap-10 md:justify-center mt-10'>
        <div className="card md:w-96 mb-10 md:mb-0 bg-base-100 shadow-xl">
            <figure><img src={Third} alt="1" /></figure>
            <div className="card-body mt-2">
                <h2 className="card-title">
                Landing/Presentation web pages!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><span className='text-2xl'>Y</span>ou have a smart business but your website doesn't look smart enough? Our dedicated web development team has the technical expertise to turn your website design into reality, prioritizing user experience and helping you reach more customers with a complete, search engine optimized website.</p>
                <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">Customizable</div> 
                <div className="badge badge-outline">Fast Delivery</div>
                </div>
                <div className="card-actions justify-end mt-4">
                    <button onClick={()=> scrollToSection(contact.current)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card md:w-96 mb-10 md:mb-0 bg-base-100 shadow-xl">
            <figure><img src={Second} alt="2" /></figure>
            <div className="card-body mt-6">
                <h2 className="card-title">
                Web Apps!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><span className='text-2xl'>W</span>hether you want to develop an existing web application or you want to create a new web application for your business, we can design and develop such a web application for you based on your business processes and requirements.</p>
                <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">Free Hosting</div> 
                <div className="badge badge-outline">Customizable</div>
                </div>
                <div className="card-actions justify-end mt-4">
                    <button onClick={()=> scrollToSection(contact.current)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img src={First} alt="3" /></figure>
            <div className="card-body mt-2">
                <h2 className="card-title">
                Server hosting and maintenance!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><span className='text-2xl'>W</span>eb hosting is very important to the success of your website. It can determine site speed, search engine ranking position, site user experience, and more. Our team of web developers has the technical expertise you need for server maintenance and a good web host choice.</p>
                <div className="card-actions justify-end mt-4">
                <div className="badge badge-outline">Hosting</div> 
                <div className="badge badge-outline">Fast</div>
                </div>
                <div className="card-actions justify-end mt-4">
                    <button onClick={()=> scrollToSection(contact.current)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    </div> */}
  )
}

export default Services