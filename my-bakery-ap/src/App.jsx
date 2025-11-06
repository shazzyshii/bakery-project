import Header from './components/Header.jsx';
import "./index.css";


import Hero from './components/Hero.jsx';
import About  from './components/About.jsx';
import Features  from './components/Features.jsx';
import Testimonials  from './components/Testimonials.jsx';
import Contact  from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Button from './components/Button.jsx';
import { FaInstagram } from "react-icons/fa";


function App() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Features />
    <Testimonials />
    <Contact />
    <FaInstagram />
    <Footer />
    <Button />
    </>
  );
};

export default App;