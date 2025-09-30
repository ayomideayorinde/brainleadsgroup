import Nav from "./components/Nav";
import Hero from "./components/Hero.js";
import About from "./components/About";
import Services from "./components/Services";
// import Results from "./components/Results";
// import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
// import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState,useEffect } from 'react';
// import Benefits from "./components/Benefits";
// import CTA2 from "./components/CTA2";
import WhyChooseUs from "./components/WhyChooseUs.js";
import Contact from "./components/Contact";
// import Partners from "./components/Partners";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Nav />
      <Hero />
      <About />
      {/* <Process /> */}
      <Services />
      <WhyChooseUs />
      <Testimonials />
      {/* <Benefits /> */}
      {/* <Results /> */}
      {/* <Partners /> */}
      {/* <CTA2 /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;