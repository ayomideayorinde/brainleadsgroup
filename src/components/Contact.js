"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapLocation } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_bk0zpsj',     // service ID
        'template_k4ddrmf',    // template ID
        form.current,
        'iWKvxS1STVD6PeFco'    // public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <section
      className="relative bg-[#F8F9FC] py-16 px-6 lg:px-[80px] overflow-hidden"
      id="contact"
    >
      
      {/* <motion.div
        className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[#FFB000] to-[#FFC734] opacity-30 blur-3xl"
        // animate={{ y: [0, 30, 0], x: [0, -30, 0] }}
        animate={{ y: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-[250px] h-[250px] rounded-full bg-gradient-to-r from-[#333333] to-[#666666] opacity-20 blur-2xl"
        // animate={{ y: [0, -40, 0], x: [0, 40, 0] }}
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      /> */}

      
      <div className="relative text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[32px] lg:text-[42px] font-bold text-gray-900"
        >
          Ready to Grow Your Brand, Revenue, and Franchise?
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-gray-600 mt-3 text-lg"
        >
          Fill out the form or schedule a call to start transforming your brand today.
        </motion.p>
      </div>

      
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold text-gray-900">Quick Contact</h3>
          <p className="text-gray-600 flex items-center gap-3">
            <FontAwesomeIcon icon={faPhone} className="text-[#FFB000]" /> 
            <a href="tel:+12049524290" className="font-medium hover:text-[#FFB000]">
              +1 204-952-4290
            </a>
          </p>
          <p className="text-gray-600 flex items-center gap-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#FFB000]" /> 
            <a href="mailto:brainleadsgroup@gmail.com" className="font-medium hover:text-[#FFB000]">
              brainleadsgroup@gmail.com
            </a>
          </p>
          <p className="text-gray-600 flex items-center gap-3">
            <FontAwesomeIcon icon={faMapLocation} className="text-[#FFB000]" /> 
            242 Hargrave St, Winnipeg, MB R3C 0T8
          </p>
        </motion.div>

        
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#333333] p-8 rounded-2xl shadow-lg w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" className="w-full p-3 rounded-md border border-gray-400" required />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your email" className="w-full p-3 rounded-md border border-gray-400" required />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white mb-2" htmlFor="phone">Phone</label>
              <input type="text" id="phone" name="phone" placeholder="Your phone" className="w-full p-3 rounded-md border border-gray-400" />
            </div>
            <div>
              <label className="block text-white mb-2" htmlFor="company">Company Name</label>
              <input type="text" id="company" name="company" placeholder="Your company" className="w-full p-3 rounded-md border border-gray-400" />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-white mb-2" htmlFor="message">Message / Project Details</label>
            <textarea id="message" name="message" rows="4" placeholder="Your message" className="w-full p-3 rounded-md border border-gray-400" required></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#FFB000] to-[#FFC734] text-white font-semibold text-lg transition-transform duration-300 hover:scale-105"
          >
            Book My Consultation
          </button>
        </motion.form>
      </div>
    </section>
  );
}
