import React from 'react'
import Dev from '../utils/Dev.svg'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../translations/i18n.js";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <>
        <div className="hero min-h-screen text-black">
            <div className="hero-content flex-col mt-4 lg:mt-0 lg:flex-row-reverse gap-4">
                <img src={Dev} alt="hero" className="max-w-sm md:max-w-md rounded-lg shadow-2xl mt-10 md:mt-0" />
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold">{t("herotitle1")} <span className='text-primary'>{t("herotitleblue")}</span> {t("herotitle2")}</h1>
                    <p className="py-6 opacity-75 md:mr-4">{t("herosub")}</p>
                    <Link to={'/services'}><button className="btn btn-primary text-white rounded-full w-[10rem]">{t("herobutt")}</button></Link>
                </div>
            </div>
        </div>
        <div className="stats shadow-[0_0px_80px_2px_rgba(0,0,0,0.1)] flex flex-col md:flex-row justify-center md:w-[66%] md:mx-auto">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div className="stat-title">Projects</div>
                <div className="stat-value">10+</div>
                <div className="stat-desc">Jan - Feb</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div className="stat-title">Clients</div>
                <div className="stat-value">10+</div>
                <div className="stat-desc">↗︎ 10+ (100%)</div>
            </div>
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <div className="stat-title">Positive feedback</div>
                <div className="stat-value">8</div>
                <div className="stat-desc">↗︎ 8 (100%)</div>
            </div>
            
        </div>
    </>
  )
}

export default Hero