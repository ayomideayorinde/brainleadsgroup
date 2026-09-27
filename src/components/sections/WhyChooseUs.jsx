import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight, faStar, faRocket } from "@fortawesome/free-solid-svg-icons";
import SectionBadge from "../common/SectionBadge";
import whyusimg from "../../assets/images/why-us-visual.png"

const points = [
  {
    title: "Creative campaigns that tell your authentic story",
    desc: "Cinematic, high-retention video production and copywriting that resonates on emotional levels.",
  },
  {
    title: "Distribution strategies that make your brand unmissable",
    desc: "Targeted digital paid media and offline activations across high-intent channels.",
  },
  {
    title: "Proven sales strategies to triple revenue velocity",
    desc: "Sales process refinement, conversion rate optimization, and consultative sales training.",
  },
  {
    title: "Lead generation & automated retention systems",
    desc: "High-converting lead magnets, drip nurturing, and long-term customer loyalty programs.",
  },
  {
    title: "Franchise growth expertise to expand nationwide",
    desc: "Scalable replication blueprints, franchisee acquisition funnels, and brand compliance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="relative w-full py-20 lg:py-28 bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#FFB000]/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#FFC734]/10 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy & Checklist (7 cols) */}
          <div className="lg:col-span-7">
            <SectionBadge text="Why Choose Brainleads" light />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-6">
              Your Brand{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC734] to-[#FFB000]">
                Deserves to Lead
              </span>
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-8 leading-relaxed max-w-xl">
              We replace fragmented marketing experiments with a cohesive growth engine.
              Here is why ambitious brands and franchises trust us with their expansion.
            </p>

            <div className="space-y-4 mb-10">
              {points.map((pt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/30 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFB000]/20 border border-[#FFB000]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <FontAwesomeIcon icon={faCheck} className="text-[#FFC734] text-xs" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white">{pt.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-400 mt-0.5">{pt.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="primary-bg px-8 py-4 rounded-full text-center font-bold text-base shadow-xl flex items-center justify-center gap-2"
              >
                <span>Partner With Us</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
              </motion.a>

              <div className="flex items-center gap-2 px-4 py-2 text-xs text-gray-400 justify-center">
                <FontAwesomeIcon icon={faRocket} className="text-[#FFB000]" />
                <span>Zero Risk Initial Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase (Now visible & optimized on ALL devices) (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            {/* Glowing Backdrop */}
            <div className="w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-gradient-to-tr from-[#FFB000]/30 to-[#FFC734]/20 blur-3xl absolute -z-0 animate-pulse-glow" />

            <div className="relative z-10 w-full max-w-sm sm:max-w-md bg-white/[0.05] p-4 sm:p-6 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
              <img
                src={whyusimg}
                alt="Why Choose Brainleads Visual Strategy"
                className="w-full h-auto rounded-2xl object-cover shadow-lg"
              />

              {/* Trust Floating Badge */}
              <div className="mt-4 p-4 rounded-xl bg-black/60 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1 text-[#FFC734] text-xs mb-1">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-white">5.0 Star Client Rating</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-[#FFC734]">5,000+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Partners Scaled</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
