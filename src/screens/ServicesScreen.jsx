import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const ServicesScreen = () => {

  const [selected, setSelected] = useState(0);
  console.log(selected);

  return (
    <div className='max-w-5xl py-[8rem] mx-auto text-black'>
        <div className='card w-full shadow-[0_0px_80px_2px_rgba(0,0,0,0.1)] flex flex-col md:flex-row'>
            <div className='md:w-[40%] flex flex-row md:flex-col md:ml-4'>
                <button onClick={() => setSelected(0)}>
                    <div className={selected === 0 ? 'md:border-l-4 border-t-4 md:border-t-0 border-primary py-[4rem] md:py-[7rem] flex justify-center text-white bg-[#258bff] rounded-md rounded-tr-none md:rounded-t-md md:rounded-r-none md:rounded-bl-none' : 'md:border-l-4 border-t-4 md:border-t-0 border-primary py-[4rem] md:py-[7rem] flex justify-center hover:text-white transa rounded-md rounded-tr-none md:rounded-t-md md:rounded-r-none md:rounded-bl-none'}><h1 className='font-medium text-xl'>Website Design</h1></div>
                </button>
                <button onClick={() => setSelected(1)}>
                    <div className={selected === 1 ? 'md:border-l-4 border-t-4 md:border-t-0 border-orange-600 py-[4rem] md:py-[7rem] flex justify-center text-white bg-[#ec6627] rounded-b-md md:rounded-node md:rounded-b-none' : 'md:border-l-4 border-t-4 md:border-t-0 border-orange-600 py-[4rem] md:py-[7rem] flex justify-center hover:text-white trans rounded-b-md md:rounded-node md:rounded-b-none'}><h1 className='font-medium text-xl'>Web & Mobile Apps</h1></div>
                </button>
                <button onClick={() => setSelected(2)}>
                    <div className={selected === 2 ? 'md:border-l-4 border-t-4 md:border-t-0 border-cyan-500 py-[4rem] md:py-[7rem] flex justify-center text-white bg-[#22D3EE] rounded-md rounded-tl-none md:rounded-b-md md:rounded-r-none' : 'md:border-l-4 border-t-4 md:border-t-0 border-cyan-500 py-[4rem] md:py-[7rem] flex justify-center hover:text-white transb rounded-md rounded-tl-none md:rounded-b-md md:rounded-r-none'}><h1 className='font-medium text-xl'>Host & Maintenance</h1></div>
                </button>
            </div>
            <div className='md:w-[60%] mr-4'>
                { selected === 0 ?
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium text-3xl border-b-2 pb-2 text-center w-[30%] mt-[3.5rem]'>Website Design</h1>
                        <p className='text-xl opacity-75 pt-6'>We provide for you:</p>
                    </div>
                    <div className='ml-6 md:ml-10 pt-[2rem]'>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-primary font-medium w-fit text-xl'>Business presentation page</h1>
                            <p className='opacity-75 ml-2'>&#x2022; Unique design, in consultancy with you.</p>
                            <p className='opacity-75 ml-2'>&#x2022; SEO optimized.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Web hosting | E-mail server | SSL certificate for free.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Fresh branding and intuitive user interface.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Guaranteed responsiveness and optimization.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Round the clock maintenance and support.</p>
                        </div>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-primary font-medium w-fit text-xl'>E-commerce website</h1>
                            <p className='opacity-75 ml-2'>&#x2022; A custom easy-to-use dashboard.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Very customizable.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Payments configuration included.</p>
                            <p className='opacity-75 ml-2'>&#x2022; SEO optimized.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Web hosting | E-mail server | SSL certificate for free.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Guaranteed responsiveness and optimization.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Round the clock maintenance and support.</p>
                        </div>
                    </div>
                </div>
                :
                selected === 1 ?
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium text-3xl border-b-2 pb-2 text-center w-[30%] mt-[3.5rem]'>Web & Mobile Apps</h1>
                        <p className='text-xl opacity-75 pt-6'>We provide for you:</p>
                    </div>
                    <div className='ml-6 md:ml-10 pt-[2rem] md:mb-[13.6rem]'>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-orange-600 font-medium w-fit text-xl'>Software application</h1>
                            <p className='opacity-75 ml-2'>&#x2022; Unique design, in consultancy with you.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Fresh technologies (React, React Native, Node JS, SQL, JavaScript)</p>
                            <p className='opacity-75 ml-2'>&#x2022; Supporting mobile apps (IOS & Android)</p>
                            <p className='opacity-75 ml-2'>&#x2022; Free hosting & deploy your application.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Strict security protocols.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Fresh branding and intuitive user interface.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Guaranteed responsiveness and optimization.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Round the clock maintenance and support.</p>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-medium text-3xl border-b-2 pb-2 text-center w-[30%] mt-[3.5rem]'>Hosting & Maintenance</h1>
                        <p className='text-xl opacity-75 pt-6'>We provide for you:</p>
                    </div>
                    <div className='ml-6 md:ml-10 pt-[2rem] md:mb-[6rem]'>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-cyan-500 font-medium w-fit text-xl'>Hosting for website or application</h1>
                            <p className='opacity-75 ml-2'>&#x2022; Web hosting.</p>
                            <p className='opacity-75 ml-2'>&#x2022; E-mail server.</p>
                            <p className='opacity-75 ml-2'>&#x2022; SSL certificate for free.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Very fast and responsive servers.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Round the clock maintenance and support.</p>
                        </div>
                        <div className='flex flex-col gap-1 mb-2'>
                            <h1 className='border-b-2 hover:border-cyan-500 font-medium w-fit text-xl'>Maintenance web/app</h1>
                            <p className='opacity-75 ml-2'>&#x2022; Re-design you website / application.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Adding new features.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Scale up your app.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Integrating/Upgrading SEO.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Solve any error or bug.</p>
                            <p className='opacity-75 ml-2'>&#x2022; Round the clock maintenance and support.</p>
                        </div>
                    </div>
                </div>
                }
                <Link to={'/contact'}><div className='mt-10 flex justify-center btn btn-primary text-white ml-4'><button>Get in touch for an offer</button></div></Link>
            </div>
        </div>
    </div>
  )
}

export default ServicesScreen