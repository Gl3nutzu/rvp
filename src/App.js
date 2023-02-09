import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Contact from './screens/Contact';
import Cookie from './screens/Cookie';
import Home from './screens/Home';
import Privacy from './screens/Privacy';
import ServicesScreen from "./screens/ServicesScreen";
import Terms from './screens/Terms';

function App() {
  return (
    <>
    <Router>
      <div className="app-layout">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie" element={<Cookie />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesScreen />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
    </>
  );
}

export default App;
