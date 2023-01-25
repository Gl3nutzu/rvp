import React from 'react'

import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Services from '../components/Services';

const Home = ({about, services, contact}) => {
  return (
    <>
        <Hero services={services}/>
        <About about={about} services={services}/>
        <Services services={services} contact={contact}/>
        <Contact contact={contact}/>
    </>
  )
}

export default Home