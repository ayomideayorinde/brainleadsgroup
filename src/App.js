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
import Contact from "./components/Contact.js";
import Partners from "./components/Partners";
import SEO from "./components/SEO.js";

const orgLd = {
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Brainleads Group",
  "url":"https://brainleadsgroup.com",
  "logo":"/brainleads.png",
  "sameAs":[
    "https://www.facebook.com/share/16kaSzKyjP/",
    "https://www.instagram.com/brainleadsgroup"
  ],
  "contactPoint":[
    {
      "@type":"ContactPoint",
      "telephone":"+1-204-952-4290",
      "contactType":"customer service",
      "areaServed":"CA",
      "availableLanguage":"English"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress":"242 Hargrave St",
    "addressLocality":"Winnipeg",
    "addressRegion":"MB",
    "postalCode":"R3C 0T8",
    "addressCountry":"CA"
  }
};

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,     
    });
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <SEO
        title="BrainLeads Marketing Firm"
        description="AI-powered digital marketing and advertising solutions, creating scalable campaigns for business growth across North America and beyond."
        url="https://brainleadsgroup.com/"
        image="/og-image.jpg"
        jsonLd={orgLd}
      />
      <Nav />
      <Hero />
      <About />
      {/* <Process /> */}
      <Services />
      <WhyChooseUs />
      <Testimonials />
      {/* <Benefits /> */}
      {/* <Results /> */}
      <Partners />
      {/* <CTA2 /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;