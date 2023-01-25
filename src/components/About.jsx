import React from 'react'

import One from '../utils/One.svg'

const About = ({about, services}) => {
  const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.offsetTop,
        left: 0,
        behavior: 'smooth'
    })
  }
  return (
    <>
        <div ref={about} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={One} alt="hero" className="max-w-sm rounded-lg shadow-2xl" />
                <div className='text-right'>
                <h1 className="text-5xl font-bold">Agile Software Development!</h1>
                <p className="py-6">Agile software development allows teams to deliver quickly, collaborate often, and continually improve their product. We take a slightly modified approach to the Agile methodology that maximizes those benefits while utilizing a global development model.</p>
                <button onClick={()=> scrollToSection(services.current)} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default About