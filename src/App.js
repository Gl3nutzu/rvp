import { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cookie from './screens/Cookie';
import Home from './screens/Home';
import Privacy from './screens/Privacy';
import Terms from './screens/Terms';

function App() {
  const about = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  return (
    <>
    <Router>
    <Navbar about={about} services={services} contact={contact}/>
      <Routes>
        <Route path="/" element={<Home about={about} services={services} contact={contact}/>} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
      </Routes>
      <Footer about={about} services={services} contact={contact}/>
    </Router>
    </>
  );
}

export default App;
