"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import fivestar from "../assets/5star.png";
import fourdotfivestar from "../assets/4.5star.png";

const testimonials = [
  {
    name: "Bob Brown",
    feedback: "Brainleads Group tripled our revenue in 6 months!",
    rating: fivestar,
    avatar: "/images/male.png",
  },
  {
    name: "Eve Wilson",
    feedback: "Their storytelling campaigns made our brand unforgettable.",
    rating: fivestar,
    avatar: "/images/female.png",
  },
  {
    name: "Charlie Davis",
    feedback: "A professional team that delivers results every time.",
    rating: fourdotfivestar,
    avatar: "/images/male.png",
  },
  {
    name: "Sophia Lee",
    feedback: "Their franchise strategy expanded us nationwide!",
    rating: fivestar,
    avatar: "/images/female.png",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#0f0f0f] py-24 overflow-hidden" id="testimonials">
      {/* Floating gradient accent */}
      <motion.div
        className="absolute top-20 left-10 w-[200px] h-[200px] bg-[#FFB000] rounded-full blur-[150px] opacity-20"
        animate={{ y: [0, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[200px] h-[200px] bg-[#FF5C00] rounded-full blur-[150px] opacity-20"
        animate={{ y: [0, -40, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Header */}
      <div className="text-center relative z-10 mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white">
          What Clients Say
        </h2>
        <p className="text-gray-400 mt-3">Trusted by businesses worldwide</p>
      </div>

      {/* Carousel */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out"
             style={{ transform: `translateX(-${index * 100}%)` }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="min-w-full flex justify-center px-6"
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-lg max-w-xl text-center text-white">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-[#FFB000]"
                />
                <img src={t.rating} alt="Rating" className="w-28 mx-auto mb-4" />
                <p className="text-lg italic leading-relaxed">“{t.feedback}”</p>
                <h3 className="mt-6 text-xl font-semibold text-[#FFB000]">
                  — {t.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-3 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#FFB000] scale-125" : "bg-gray-500"
            } transition-all`}
          />
        ))}
      </div>
    </section>
  );
}
