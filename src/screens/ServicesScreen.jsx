import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import "../translations/i18n.js";

const ServicesScreen = () => {

  const [selected, setSelected] = useState(0);
  const { t } = useTranslation();

  return (
    <div className='max-w-5xl py-[8rem] mx-auto text-black'>
        <div className='card w-full shadow-[0_0px_80px_2px_rgba(0,0,0,0.1)] flex flex-col md:flex-row'>
            <div className='md:w-[40%] flex flex-row md:flex-col md:ml-4'>
                <button onClick={() => setSelected(0)}>
                    <div className={selected === 0 ? 'md:border-l-4 border-t-4 md:border-t-0 border-primary py-[4rem] md:py-[7rem] flex justify-center text-white bg-[#258bff] rounded-md rounded-tr-none md:rounded-t-md md:rounded-r-none md:rounded-bl-none' : 'md:border-l-4 border-t-4 md:border-t-0 border-primary py-[4rem] md:py-[7rem] flex justify-center hover:text-white transa rounded-md rounded-tr-none md:rounded-t-md md:rounded-r-none md:rounded-bl-none'}><h1 className='font-medium text-xl'>{t("serv1")}</h1></div>
                </button>
                <button onClick={() => setSelected(1)}>
                    <div className={selected === 1 ? 'md:border-l-4 border-t-4 md:border-t-0 border-orange-600 py-[4rem] md:py-[7rem] flex justify-center text-white bg-[#ec6627] rounded-b-md md:rounded-node md:rounded-b-none' : 'md:border-l-4 border-t-4 md:border-t-0 border-orange-600 py-[4rem] md:py-[7rem] flex justify-center hover:text-white trans rounded-b-md md:rounded-node md:rounded-b-none'}><h1 className='font-medium text-xl'>{t("serv2")}</h1></div>
                </button>
                <button onClick={() => setSelected(2)}>
                    <div className={selected === 2 ? 'md:border-l-4 border-t-4 md:border-t-0 border-cyan-500 py-[4rem] md:py-[7rem] flex justify-center text-white bg-[#22D3EE] rounded-md rounded-tl-none md:rounded-b-md md:rounded-r-none' : 'md:border-l-4 border-t-4 md:border-t-0 border-cyan-500 py-[4rem] md:py-[7rem] flex justify-center hover:text-white transb rounded-md rounded-tl-none md:rounded-b-md md:rounded-r-none'}><h1 className='font-medium text-xl'>{t("serv3")}</h1></div>
                </button>
            </div>
            <div className='md:w-[60%] mr-4'>
                { selected === 0 ?
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium text-3xl border-b-2 pb-2 text-center w-[30%] mt-[3.5rem]'>{t("serv1")}</h1>
                        <p className='text-xl opacity-75 pt-6'>{t("provide")}</p>
                    </div>
                    <div className='ml-6 md:ml-10 pt-[2rem]'>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-primary font-medium w-fit text-xl'>{t("wdt1")}</h1>
                            <p className='opacity-75 ml-2'>&#x2022; {t("unique")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("seo")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("free")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("branding")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("optimization")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("maintenance")}</p>
                        </div>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-primary font-medium w-fit text-xl'>{t("wdt2")}</h1>
                            <p className='opacity-75 ml-2'>&#x2022; {t("dash")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("custom")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("pay")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("seo")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("free")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("optimization")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("maintenance")}</p>
                        </div>
                    </div>
                </div>
                :
                selected === 1 ?
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium text-3xl border-b-2 pb-2 text-center w-[30%] mt-[3.5rem]'>{t("serv2")}</h1>
                        <p className='text-xl opacity-75 pt-6'>{t("provide")}</p>
                    </div>
                    <div className='ml-6 md:ml-10 pt-[2rem] md:mb-[13.6rem]'>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-orange-600 font-medium w-fit text-xl'>{t("wmt")}</h1>
                            <p className='opacity-75 ml-2'>&#x2022; {t("unique")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("fresh")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("cross")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("deploy")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("security")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("branding")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("optimization")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("maintenance")}</p>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium text-3xl border-b-2 pb-2 text-center w-[30%] mt-[3.5rem]'>{t("serv3")}</h1>
                        <p className='text-xl opacity-75 pt-6'>{t("provide")}</p>
                    </div>
                    <div className='ml-6 md:ml-10 pt-[2rem] md:mb-[6rem]'>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-cyan-500 font-medium w-fit text-xl'>{t("hmt1")}</h1>
                            <p className='opacity-75 ml-2'>&#x2022; {t("host")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("mail")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("ssl")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("fast")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("maintenance")}</p>
                        </div>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-cyan-500 font-medium w-fit text-xl'>{t("hmt2")}</h1>
                            <p className='opacity-75 ml-2'>&#x2022; {t("redes")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("feat")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("scale")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("upseo")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("err")}</p>
                            <p className='opacity-75 ml-2'>&#x2022; {t("maintenance")}</p>
                        </div>
                    </div>
                </div>
                }
                <Link to={'/contact'}><div className='mt-10 flex justify-center btn btn-primary text-white ml-4'><button>{t("touch")}</button></div></Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesScreen