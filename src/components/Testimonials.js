"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import fivestar from "../assets/5star.png";
import fourdotfivestar from "../assets/4.5star.png";
// import fourstar from "/images/4star.png"

const testimonials = [
  {
    name: "Bob Brown",
    feedback: "Brainleads Group tripled our revenue in 6 months!",
    rating: fivestar,
  },
  {
    name: "Eve Wilson",
    feedback: "Their storytelling campaigns made our brand unforgettable.",
    rating: fivestar,
  },
  {
    name: "Charlie Davis",
    feedback: "A professional team that delivers results every time.",
    rating: fourdotfivestar,
  },
  {
    name: "Sophia Lee",
    feedback: "Their franchise strategy expanded us nationwide!",
    rating: fivestar,
  },
  {
    name: "Daniel Thompson",
    feedback:
      "Working with Brainleads was the best business decision we made this year! Their team produced a stunning campaign video that brought our brand to life. The results were instant — more engagement, better leads, and real conversions. Highly recommend!",
    rating: fivestar,
  },
  {
    name: "Laura Adams",
    feedback:
      "Professional, creative, and always ahead of schedule. From video ads to digital strategy, they handled everything with precision. Our franchise inquiries doubled within two months.",
    rating: "/images/4star.png",
  },
  {
    name: "Michael Roberts",
    feedback:
      "They don’t just market — they build brands. Brainleads helped us refine our message and run a campaign that reached thousands. The video production was cinematic, and the team really understood our target audience.",
    rating: fivestar,
  },
  {
    name: "Grace Mitchell",
    feedback:
      "Great for startups looking to scale! As a small business, we needed affordable lead generation and exposure. Their digital campaigns gave us steady client flow. Definitely worth the investment.",
    rating: "/images/4star.png",
  },
  {
    name: "James Carter",
    feedback:
      "The franchise expansion service was a game-changer. We’ve opened three new locations since partnering with Brainleads. They didn’t just market for us — they built a strategy that attracted serious franchisees.",
    rating: fivestar,
  },
  {
    name: "Olivia Turner",
    feedback:
      "Excellent communication and modern marketing approach. Every week, they updated us with performance reports and fresh ideas. Their campaign videos are top-tier — looks like something straight from a major brand.",
    rating: "/images/4star.png",
  },
  {
    name: "Henry Brooks",
    feedback:
      "Our online visibility skyrocketed! Before Brainleads, we struggled with reach. Their SEO, ads, and content creation brought in consistent leads. Within weeks, we started closing high-value clients.",
    rating: fivestar,
  },
  {
    name: "Isabella Scott",
    feedback:
      "They make marketing look easy. The creative direction, storytelling, and video editing were flawless. Their team understands both branding and performance — a rare combo.",
    rating: "/images/4star.png",
  },
  {
    name: "David Morgan",
    feedback:
      "If you want results, this is the team. We launched a new product campaign and Brainleads handled everything — scriptwriting, production, digital rollout. The professionalism is unmatched.",
    rating: fivestar,
  },
  {
    name: "Emily Johnson",
    feedback:
      "Brainleads is like having your own in-house marketing department. From concept to execution, they cover it all — video, digital marketing, and expansion strategy. I’ve worked with agencies before, but none delivered this level of creativity and consistency.",
    rating: fivestar,
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
    <section 
      id="testimonials"
      className="relative bg-[#0f0f0f] py-24 overflow-hidden"
    >
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
