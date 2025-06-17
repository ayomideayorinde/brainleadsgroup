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

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Nav />
      <Hero />
      <WhyChooseUs />
      <Services />
      <Results />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
