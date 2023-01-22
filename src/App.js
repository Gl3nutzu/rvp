import { useRef } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services';

function App() {
  const about = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <Navbar about={about} services={services} contact={contact}/>
      <Hero/>
      <About about={about} />
      <Services services={services}/>
      <Contact contact={contact}/>
      <Footer about={about} services={services} contact={contact}/>
    </>
  );
}

export default App;
