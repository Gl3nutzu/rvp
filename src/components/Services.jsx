import React from 'react';

import { IoDesktop, IoPhonePortrait } from 'react-icons/io5';
import { AiFillDatabase } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../translations/i18n.js";

const Services = () => {
    const { t } = useTranslation();
    return (
    <>
        <div className='flex justify-center my-10 md:my-[8rem]'>
            <h1 className='text-4xl text-center font-bold text-black border-t-2 border-b-2 pt-1 pb-2'>{t("service")}</h1>
        </div>
        <div className='flex flex-col md:flex-row gap-8 justify-between md:justify-center md:mx-[10%] text-black mb-10 md:mb-0'>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-14 h-14 rounded-full bg-base-200'>
                    <IoDesktop className='w-8 h-8' />
                </div>
                <h1 className='font-bold text-lg'>{t("serv1")}</h1>
                <p className='opacity-70 text-center text-black w-64'>{t("service1")}</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-14 h-14 rounded-full bg-base-200'>
                    <IoPhonePortrait className='w-8 h-8' />
                </div>
                <h1 className='font-bold text-lg'>{t("serv2")}</h1>
                <p className='opacity-70 text-center text-black w-64'>{t("service2")}</p>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex justify-center items-center w-14 h-14 rounded-full bg-base-200'>
                    <AiFillDatabase className='w-8 h-8' />
                </div>
                <h1 className='font-bold text-lg'>{t("serv3")}</h1>
                <p className='opacity-70 text-center text-black w-64'>{t("service3")}</p>
            </div>
        </div>
        <div className='flex justify-center'>
            <Link to={'/services'}><button className="btn btn-black text-white w-[10rem] mx-auto mt-8">{t("servicebutt")}</button></Link>
        </div>
    </>
  )
}

export default Services