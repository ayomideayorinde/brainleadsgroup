import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import fivestar from "../assets/5star.png";
import fourdotfivestar from "../assets/4.5star.png";

const testimonials = [
  {
    name: "Bob Brown",
    feedback:
      "Within 3 months, Brain Leads Group increased our qualified leads by 42% and boosted our online sales by 30%.",
    rating: fivestar,
  },
  {
    name: "Eve Wilson",
    feedback:
      "The video ads they created became our top-performing campaign of the year.",
    rating: fivestar,
  },
  {
    name: "Charlie Davis",
    feedback:
      "Their expertise in digital marketing is unmatched. We saw a significant increase in our online presence.",
    rating: fourdotfivestar,
  },
  {
    name: "David Lee",
    feedback:
      "We were impressed with their strategic approach and attention to detail. Our project was a success!",
    rating: fivestar,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-gradient-to-r from-[#1a1a1a] via-[#333333] to-[#1a1a1a] py-16 lg:px-[50px] px-[25px] text-white overflow-hidden"
      id="testimonials"
    >
      {/* Accent background animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#FFB000] to-[#FF5C00] opacity-20 blur-3xl"
        animate={{ x: ["0%", "20%", "0%"], y: ["0%", "10%", "0%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center mb-12">
        <h1 className="text-[32px] lg:text-[40px] font-bold">Proven Results</h1>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Don’t just take our word for it — here’s what our clients have to say.
        </p>
      </div>

      <div className="relative flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="bg-white text-black max-w-lg w-full p-8 rounded-2xl shadow-2xl text-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={testimonials[index].rating}
              alt="Rating"
              className="w-[100px] mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-700">{testimonials[index].feedback}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-8 gap-3 relative z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === index ? "bg-[#FFB000] scale-125" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
