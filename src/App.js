import React from "react";
import {
  Navbar,
  Footer,
  Hero,
  About,
  Services,
  WhyChooseUs,
  Testimonials,
  Partners,
  Contact,
  BackToTop,
  SEO,
} from "./components";
import { COMPANY_INFO } from "./constants/company";

const orgLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_INFO.name,
  url: "https://brainleadsgroup.com",
  logo: "https://brainleadsgroup.com/brainleads.png",
  sameAs: [
    COMPANY_INFO.socials.facebook,
    COMPANY_INFO.socials.instagram,
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: COMPANY_INFO.phone,
      contactType: "customer service",
      areaServed: "CA",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "242 Hargrave St",
    addressLocality: COMPANY_INFO.locality,
    addressRegion: COMPANY_INFO.region,
    postalCode: COMPANY_INFO.postalCode,
    addressCountry: COMPANY_INFO.country,
  },
};

function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-gray-900 font-sans selection:bg-[#FFB000] selection:text-black">
      <SEO
        title="BrainLeads Marketing Firm – Your Brand Deserves to Prosper"
        description="AI-powered digital marketing and advertising solutions, creating scalable campaigns for business growth across North America and beyond."
        url="https://brainleadsgroup.com/"
        image="/og-image.jpg"
        jsonLd={orgLd}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
