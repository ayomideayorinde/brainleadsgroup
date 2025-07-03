import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Results from "./components/Results";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState,useEffect } from 'react';
import Benefits from "./components/Benefits";
import CTA2 from "./components/CTA2";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  const [time, setTime] = useState(new Date());
  useEffect(()=>{
    const interval = setInterval(
      ()=>{
        setTime(new Date())
      },1000
    )
    return () => clearInterval(interval);
  },[])

  const hour = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2,'0');
  const seconds = String(time.getSeconds()).padStart(2,'0');
  const day = time.getDate();
  const month = time.toLocaleString('default',{month: 'long'});
  const year = time.getFullYear();
  console.log(month)
  return (
    // <div className="bg-gray-50 text-gray-800 font-sans">
    //   <div className="coverScreen">
    //     <h1 className="text-black bg-white px-5 py-2 rounded-md text-center text-[40px] mb-5">
    //       {`
    //       ${hour > 12 ? hour%2 : hour} : 
    //       ${minutes} : 
    //       ${seconds} 
    //       ${hour >= 12 ? "PM" : "AM"}

    //       `}&nbsp;
    //       {
    //         `
    //         ${month} ${day}, ${year}
    //         `
    //       }
    //     </h1>
    //     <h1 className="text-white text-center text-[40px]">
    //       We’re almost ready to go live.<br/>Something amazing is coming your way! <br/> Stay tuned.
    //     </h1>
    //   </div>
      <Nav />
      <Hero />
      <Services />
      <CTA />
      <Benefits />
      <Results />
      <Process />
      <CTA2 />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;