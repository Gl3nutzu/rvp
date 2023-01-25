import React from 'react'
import Dev from '../utils/Dev.svg'

const Hero = ({services}) => {
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.offsetTop,
            left: 0,
            behavior: 'smooth'
        })
    }
  return (
    <>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={Dev} alt="hero" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">WE’RE THE WHOLE PACKAGE</h1>
                <p className="py-6">We design and develop websites that deliver outstanding results. Our web development agency can manage the entire web development process for your company. From design, to development, testing, or if you already have a website, we can provide you with support and maintenance to simplify your internal processes.</p>
                <button onClick={()=> scrollToSection(services.current)} className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
        <div className="stats shadow flex flex-col md:flex-row justify-center">
            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title">Projects</div>
                <div className="stat-value">50+</div>
                <div className="stat-desc">Aug 1st - Nov 1st</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div className="stat-title">Clients</div>
                <div className="stat-value">100+</div>
                <div className="stat-desc">↗︎ 40+ (40%)</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <div className="stat-title">Positive feedback</div>
                <div className="stat-value">88</div>
                <div className="stat-desc">↗︎ 25 (14%)</div>
            </div>
            
        </div>
    </>
  )
}

export default Hero