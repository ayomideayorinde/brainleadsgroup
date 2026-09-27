import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faChartPie, faStore, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import SectionBadge from "../common/SectionBadge";
import { COMPANY_INFO } from "../../constants/company";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const pillars = [
  {
    icon: faVideo,
    title: "Cinematic Storytelling",
    description: "Campaigns that evoke deep emotions, amplify recall, and position your brand as the undeniable market authority.",
  },
  {
    icon: faChartPie,
    title: "Performance & Distribution",
    description: "Precision omnichannel ads and AI-driven targeting designed to capture leads, accelerate sales velocity, and triple revenue.",
  },
  {
    icon: faStore,
    title: "Franchise Expansion",
    description: "Proven blueprints, investor-ready messaging, and turnkey systems to scale single units into nationwide franchise powerhouses.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#111111] text-white overflow-hidden"
    >
      {/* Ambient background glow orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-gradient-to-r from-red-500/20 via-yellow-400/20 to-orange-500/20 blur-[100px] pointer-events-none"
        animate={{ x: [0, 30, -30, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400/20 via-orange-500/15 to-red-500/10 blur-[120px] pointer-events-none"
        animate={{ x: [0, -40, 40, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionBadge text="About Brainleads" light />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight tracking-tight"
          >
            We Don’t Just Market —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC734] to-[#FFB000]">
              We Transform
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed"
          >
            At Brainleads Group, we combine storytelling, data-driven marketing,
            sales strategy, and franchise growth expertise to turn brands into
            industry leaders. From creative campaigns to lead generation and
            franchise expansion, we make your brand unmissable, unforgettable, and
            unstoppable.
          </motion.p>
        </motion.div>

        {/* 3 Pillars Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-14"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              whileHover={{ y: -6, borderColor: "rgba(255, 176, 0, 0.4)" }}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 lg:p-8 backdrop-blur-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-[#FFC734] text-xl mb-6">
                  <FontAwesomeIcon icon={pillar.icon} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.a
            href={COMPANY_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 primary-bg px-8 py-3.5 rounded-full font-bold text-base shadow-lg transition-all"
          >
            <span>Book a Strategy Call</span>
            <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
