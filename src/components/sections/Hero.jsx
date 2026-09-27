import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCalendarCheck, faChartLine, faUsers, faGlobe, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { COMPANY_INFO } from "../../constants/company";
import herovid from "../../assets/videos/hero-vid-bg.mp4"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const highlights = [
    { icon: faUsers, value: "5,000+", label: "Clients Served" },
    { icon: faChartLine, value: "3x", label: "Avg Revenue Growth" },
    { icon: faGlobe, value: "20+", label: "Countries Reached" },
    { icon: faShieldAlt, value: "99.4%", label: "Satisfaction Rate" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-24 sm:pt-28 pb-12">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover scale-105"
        src={herovid}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Modern Gradient Vignette & Gold Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#FFB000]/20 via-[#FFC734]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-white/10 text-amber-300 border border-amber-400/30 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-ping" />
              AI-Powered Marketing & Franchise Growth
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl"
          >
            Your Brand,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC734] via-[#FFB000] to-amber-300">
              Unstoppable
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-normal"
          >
            We tell your story, amplify your reach, and accelerate your revenue with creative campaigns,
            omnichannel distribution, and scalable franchise expansion solutions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <motion.a
              href={COMPANY_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto primary-bg px-8 py-4 rounded-full font-bold text-base sm:text-lg shadow-xl flex items-center justify-center gap-3 transition-all"
            >
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span>Get Free Growth Consultation</span>
            </motion.a>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-base sm:text-lg text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Services</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs text-amber-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Trust Stats Ribbon at bottom */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 border-r border-white/10 last:border-r-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[#FFC734] shrink-0">
                <FontAwesomeIcon icon={item.icon} className="text-base sm:text-lg" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs text-gray-300 font-medium truncate">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
