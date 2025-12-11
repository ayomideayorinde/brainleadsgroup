import Nav from "./components/Nav";
import Hero from "./components/Hero.js";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhyChooseUs from "./components/WhyChooseUs.js";
import Contact from "./components/Contact.js";
import Partners from "./components/Partners";
import SEO from "./components/SEO.js";



// function ErrorGate() {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       className="fixed inset-0 flex flex-col justify-center items-center bg-gray-900 text-white z-[2000] px-6 text-center"
//     >
//         <h1 className="lg:text-8xl text-6xl mb-4">⚠️</h1>
//       <h1 className="text-4xl font-bold mb-4">Something Went Wrong</h1>
//       <p className="text-lg">
//         The application is currently unavailable. Please check back later.
//       </p>
//     </motion.div>
//   );
// }

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Brainleads Group",
  url: "https://brainleadsgroup.com",
  logo: "/brainleads.png",
  sameAs: [
    "https://www.facebook.com/share/16kaSzKyjP/",
    "https://www.instagram.com/brainleadsgroup",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-204-952-4290",
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "242 Hargrave St",
    addressLocality: "Winnipeg",
    addressRegion: "MB",
    postalCode: "R3C 0T8",
    addressCountry: "CA",
  },
};

function App() {
  // const [blocked, setBlocked] = useState(false);

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });

    
  //   const stopDate = new Date("2050-10-06T23:59:59");
  //   const now = new Date();
  //   if (now > stopDate) {
  //     setBlocked(true);
  //   }
  // }, []);

  // if (blocked) return <ErrorGate />;

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
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
