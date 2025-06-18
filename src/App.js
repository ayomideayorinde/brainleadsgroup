import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Results from "./components/Results";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Benefits from "./components/Benefits";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Nav />
      <Hero />
      <Services />
      <CTA />
      <Benefits />
      <WhyChooseUs />
      <Results />
      <Process />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;