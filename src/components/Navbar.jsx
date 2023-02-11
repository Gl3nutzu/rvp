import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import '../translations/i18n.js';
import i18n from 'i18next';
import Logo from '../assets/rvp.png';
import ro from '../assets/romania-flag.png';
import en from '../assets/usa-flag.png';

const Navbar = () => {
  const { t } = useTranslation();
  const [lang, setLang] = useState("en");
  

  useEffect(() => {
    const getGeoInfo = () => {
        axios
          .get("https://ipapi.co/json/")
          .then(async (response) => {
            let data = response.data;
            if(data.country_name === "Romania") {
                setLang("ro");
                i18n.changeLanguage("ro");
            }
            else {
                setLang("en");
                i18n.changeLanguage("en");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    getGeoInfo();
  }, []);

  return (
    <div className="navbar bg-base-100 fixed z-10 shadow-lg px-4 md:px-10">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link to={'/'}>{t("home")}</Link></li>
                    <li><Link to={'/services'}>{t("serv")}</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
            <Link to={'/'}><img src={Logo} alt='LOGO' width={170} height={33}></img></Link>
        </div>
        <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal p-0 ">
            <li className='font-medium'><Link to={'/'}>{t("home")}</Link></li>
            <li className='font-medium'><Link to={'/services'}>{t("serv")}</Link></li>
            <li className='font-medium'><Link to={'/contact'}>Contact</Link></li>
        </ul>
        </div>
        <div className="navbar-end">
            <button className='font-light text-xs md:text-base md:mr-4 flex gap-2' 
                onClick={
                    () => {
                        if(lang === "ro") {
                          i18n.changeLanguage("en");
                          setLang("en"); 
                        }
                        else {
                          i18n.changeLanguage("ro");
                          setLang("ro"); 
                        }
                    }
                }
                >Language: {lang === "en" ? <img src={en} alt='en' width={45} height={40} /> : <img src={ro} alt='ro' width={45} height={30} />}
            </button>
            <Link className='hidden md:inline-block' to={'/contact'}><button className="btn btn-primary text-white rounded-full w-[10rem]">
                {t("hireus")}
            </button></Link>
        </div>
    </div>
  )
}

export default Navbar