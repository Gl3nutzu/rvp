import React from 'react'

const Services = ({services, contact}) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
      }
    return (
    <div ref={services} className='bg-base-200 py-20'>
        <h1 className='text-5xl mb-10 text-center font-semibold'>Services</h1>
    <div className='md:flex md:flex-row md:gap-10 md:justify-center'>
        <div className="card md:w-96 mb-10 md:mb-0 bg-base-100 shadow-xl">
            <figure><img src="http://placeimg.com/400/225/tech" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Landing/Presentation web pages!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>You have a smart business but your website doesn't look smart enough?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Customizable</div> 
                <div className="badge badge-outline">Fast Delivery</div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=> scrollToSection(contact.current)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card md:w-96 mb-10 md:mb-0 bg-base-100 shadow-xl">
            <figure><img src="http://placeimg.com/400/225/tech" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Web Apps!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>You have a business ideea but you need a complex web app to run online?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Free Hosting</div> 
                <div className="badge badge-outline">Customizable</div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=> scrollToSection(contact.current)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure><img src="http://placeimg.com/400/225/tech" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                Server hosting and maintenance!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Fast and professional hosting services?</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Hosting</div> 
                <div className="badge badge-outline">Fast</div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={()=> scrollToSection(contact.current)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Services